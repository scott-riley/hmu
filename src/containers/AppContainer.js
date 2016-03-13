import React, {Component} from "react";
import Transmit from "react-transmit";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';
import promise from 'redux-promise';

import Sidebar from 'components/App/Sidebar/Sidebar';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export default class AppContainer extends Component {
	/**
	 * Runs on server and client.
	 */
	render () {
		return (
			<Provider store={createStoreWithMiddleware(reducers)}>
				<div>
					<main>
						{this.props.children}
					</main>
				</div>
			</Provider>
		);
	}
}
