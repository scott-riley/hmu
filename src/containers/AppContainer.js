import React, {Component} from "react";
import Transmit from "react-transmit";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute} from "react-router";

import reducers from '../reducers';
import promise from 'redux-promise';

import Sidebar from 'components/App/Sidebar/Sidebar';

import Nav from 'components/App/Nav/Nav';

import s from './App.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export default class AppContainer extends Component {
	/**
	 * Runs on server and client.
	 */
	componentWillMount() {
		// Router.push('/app/login');
	}
	render () {
		return (
			<Provider store={createStoreWithMiddleware(reducers)}>
				<div className={s.root}>
					<Nav />
					<main>
						{this.props.children}
					</main>
					<div className={s.beta}><b>BETA!</b> – HMU is currently in open beta. Shit might go a bit weird erry now and then.</div>
				</div>
			</Provider>
		);
	}
}
