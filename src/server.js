import babelPolyfill from "babel-polyfill";
import koa from "koa";
import cors from "koa-cors";
import koaProxy from "koa-proxy";
import koaStatic from "koa-static";
import compressor from "koa-compressor";
import React from "react";
import ReactDOM from "react-dom/server";
import * as ReactRouter from "react-router";
import Transmit from "react-transmit";

import routesContainer from "containers/routes";

try {
  const app      = koa();
  const hostname = process.env.HOSTNAME || "localhost";
  const port     = process.env.PORT || 8000;
  let   routes   = routesContainer;

	app.use(compressor());
  app.use(cors());
  app.use(koaStatic("static"));
  app.use(function *(next) {
    yield ((callback) => {
      const webserver = __PRODUCTION__ ? "" : `//${this.hostname}:8080`;
      const location  = this.path;
      const styleTag  = __PRODUCTION__ ? `<link rel="stylesheet" type="text/css" href="${webserver}/dist/app.css" />` : "";

      ReactRouter.match({routes, location}, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
          this.redirect(redirectLocation.pathname + redirectLocation.search, "/");
          return;
        }

        if (error || !renderProps) {
          callback(error);
          return;
        }

        Transmit.renderToString(ReactRouter.RouterContext, renderProps).then(({reactString, reactData}) => {
          let template = (
            `<!doctype html>
            <html lang="en-us">
              <head>
                <meta charset="utf-8">
                <title>HMU – Dat Endpoint</title>
                ${styleTag}
                <link href='https://fonts.googleapis.com/css?family=Roboto:400,700,300,900,400italic' rel='stylesheet' type='text/css'>
                <link href='https://fonts.googleapis.com/css?family=Gentium+Book+Basic:700italic' rel='stylesheet' type='text/css'>
              </head>
              <body>
                <div id="react-root">${reactString}</div>
              </body>
              <script>
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

                ga('create', 'UA-75209719-1', 'auto');
                ga('send', 'pageview');

              </script>
            </html>`
          );

          this.type = "text/html";
          this.body = Transmit.injectIntoMarkup(template, reactData, [`${webserver}/dist/client.js`]);

          callback(null);
        });
      });
    });
  });

  app.listen(port, () => {
    console.info("==> ✅  Server is listening");
    console.info("==> 🌎  Go to http://%s:%s", hostname, port);
  });

  if (__DEV__) {
    if (module.hot) {
      console.log("[HMR] Waiting for server-side updates");

      module.hot.accept("containers/routes", () => {
        routes = require("containers/routes");
      });

      module.hot.addStatusHandler((status) => {
        if (status === "abort") {
          setTimeout(() => process.exit(0), 0);
        }
      });
    }
  }
}
catch (error) {
  console.error(error.stack || error);
}
