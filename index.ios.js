/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	NavigatorIOS
} from 'react-native';
import ConnectRoute from './routes/ConnectRoute';
import RouterManager from './RouterManager';

export default class UniverseIOS extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<NavigatorIOS initialRoute={{
					component: ConnectRoute,
					title: 'Connect to Universe'
				}} style={{flex: 1}} ref={(nav) => {RouterManager.navigator = nav;}}/>
			</View>
		);
	}
}

AppRegistry.registerComponent('UniverseIOS', () => UniverseIOS);
