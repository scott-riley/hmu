import React, {Component} from 'react';
import s from './Docs.css';

export default class Docs extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className={s.root}>
        <div className={s.intro}>
          <h2 className={s.heading}>Getting started</h2>
          <p className={s.copy}>
            The purpose of HMU is to give you a super simple endpoint to start receiving messages. The only things you need to know are how to POST data to a URL from a form or an app, and how to structure basic JSON objects. If this is new to you, have a read of the examples and they might shed more light!
          </p>
        </div>
        <div className={s.docsContent}>
          <div className={s.contentSection}>
            <h3>TL;DR</h3>
            <ol>
              <li>Sign up for a free account</li>
              <li>Grab your endpoint URL</li>
              <li>Decide what data you want to send (consider using <i>special fields</i> woah!)</li>
              <li>Build out your form or app, send data to your endpoint, rejoice</li>
            </ol>
            <h3>Your endpoint URL</h3>
            <p>You can find your endpoint URL on your <a href="/app/settings">settings page</a>. This is a public URL that you can use to start receiving messages. And will look something like <code className={s.inlineCode}>http://api.hmu.cool/messages/blahblahblahkissurdad</code>.</p>

            <h3>HTTP/HTTPS</h3>
            <p>Your endpoint can be standard http or https. If your site is secured by SSL and you’re sending people to a https:// URL, you’ll want to make sure your site protocol and HMU URL protocol match or you’ll likely get mixed content warnings. You can either use relative protocols (//api.hmu.cool) or make sure you explicitly use https://.</p>

            <h3>Data structure</h3>
            <p>HMU expects a JSON structure that includes the following information:</p>
            <p><strong>email (string):</strong> The email of the sender. This is optional but it’s the default way of idenitifying request senders.</p>
            <p><strong>fields (object):</strong> An object full of the fields you want to be associated with a message. This should be a single-level, key:value JSON object. Currently only numerical and text values are supported, so no weird image uploads okay thx. It also doesn’t play nice with JSON nested deeper than the first level of this fields object, so if you’re looking to send deeper-nested JSON then just know that it’ll likely get parsed like shit right now.</p>
            <p>A common request object might look a little like this:</p>
            <iframe height='268' scrolling='no' src='//codepen.io/scott_riley/embed/ONbrjZ/?height=268&theme-id=0&default-tab=js' frameborder='no' allowtransparency='true' allowfullscreen='true' style={ { width: "100%" } } >
            </iframe>

            <h3>Special fields</h3>
            <p>Oh shit yo now we’re talking. HMU will parse certain fields differently to others. Currently these fields are ‘name’ and ‘subject’. If any item in your ‘fields’ object has a key of ‘name’ or ‘subject’ it’ll be parsed slightly differently so that your dashboard makes a little more sense.</p>
            <p>These fields are totally optional and only dictate how messages appear in your dashboard.</p>

            <h2>Examples</h2>
            <p>The examples below are quite barebones for legibility sake. You’ll likely want to handle responses in your own special way. Remember to use your HMU endpoint, because ‘blahblahblah’ isn’t valid 💩</p>
            <h3>FETCH API</h3>
            <p>The <a href="https://developer.mozilla.org/en/docs/Web/API/Fetch_API">fetch API</a> makes XHR requests all lovely and promisey. It’s still classed as an experimental technology and not widely supported, but there’s a super dope <a href="https://github.com/github/fetch">polyfill</a>.</p>
            <iframe height='268' scrolling='no' src='//codepen.io/scott_riley/embed/XdNvOd/?height=268&theme-id=0&default-tab=js' frameborder='no' allowtransparency='true' allowfullscreen='true' style={ { width: "100%" } } >
            </iframe>
            <h3>Axios, ES6</h3>
            <p><a href="https://github.com/mzabriskie/axios">Axios</a> is a lovely, promise-based wrapper that makes handling API requests a dream.</p>
            <iframe height='268' scrolling='no' src='//codepen.io/scott_riley/embed/GZNVVB/?height=268&theme-id=0&default-tab=js' frameborder='no' allowtransparency='true' allowfullscreen='true' style={ { width: "100%" } } >
            </iframe>
            <h3>jQuery AJAX</h3>
            <p>jQuery is… jQuery.</p>
            <iframe height='268' scrolling='no' src='//codepen.io/scott_riley/embed/RaKbbJ/?height=268&theme-id=0&default-tab=js' frameborder='no' allowtransparency='true' allowfullscreen='true' style={ { width: "100%" } } >
            </iframe>
            <h2>Questions</h2>
            <h3>Can I respond to messages in HMU?</h3>
            <p>Nope. The main point of HMU is to provide developers with a simple endpoint to start receiving messages. What you do with those messages is totally up to you.</p>
            <h3>Why is there an inbox then you shit?</h3>
            <p>Because email can be awful and maybe it’s nice to have all your messages in one place I don’t really know leave me alone this is free.</p>
          </div>
        </div>
      </div>
    );
  }
}
