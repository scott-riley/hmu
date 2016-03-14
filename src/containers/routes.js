/**
*	Super basic route setup that lets you have separate containers for your
* application and site.
**/
import React from "react";
import {Router, Route, IndexRoute} from "react-router";

// Marketing site
import SiteContainer from "./SiteContainer";
import Homepage from 'components/Site/Homepage/Homepage';

// Application
import AppContainer from "./AppContainer";
import MainScreen from 'components/App/MainScreen/MainScreen';
import LogIn from 'components/App/LogIn/LogIn';
import MessageList from 'components/App/MessageList/MessageList';

module.exports = (
	<Router>
		{/*Marketing site*/}
		<Route path="/" component={SiteContainer}>
			<IndexRoute component={Homepage} />
		</Route>

		{/*Application*/}
		<Route path="/app" component={AppContainer}>
			<IndexRoute component={MainScreen} />
			<Route path="messages" component={MessageList} />
			<Route path="login" component={LogIn} />
		</Route>
	</Router>
);
