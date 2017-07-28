import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {View, Text} from 'react-native';
import ConnectionStore from '../stores/ConnectionStore';

@observer
class Universe extends Component {

	componentWillUnmount() {
		if (ConnectionStore.netClient) {
			console.log('end()');
			ConnectionStore.netClient.end();
		}
	}

	render() {
		return (
			<View>
				<Text>Test</Text>
			</View>
		);
	}

}

export default Universe;
