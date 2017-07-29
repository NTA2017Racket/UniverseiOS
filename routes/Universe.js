import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {View, StyleSheet} from 'react-native';
import ConnectionStore from '../stores/ConnectionStore';
import { FormLabel, FormInput, Text, Icon } from 'react-native-elements';
import ButtonComponent, {RoundButton} from 'react-native-button-component';
import Prompt from 'react-native-prompt';

@observer
class Universe extends Component {

	send() {
		if (ConnectionStore.degree) {
			try {
				ConnectionStore.netClient.write(ConnectionStore.degree + '\n');
			} catch (e) {
				console.log(e.message);
			}
		}
	}

	componentWillUnmount() {
		if (ConnectionStore.netClient) {
			console.log('end()');
			ConnectionStore.netClient.end();
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Prompt title={'Change username'} placeholder={'z.B Kevin'} defaultValue={ConnectionStore.username} visible={ConnectionStore.prompt}
				        onSubmit={(username) => {ConnectionStore.changeUsername(username)}}
				        onCancel={() => {ConnectionStore.prompt = false;}}
				/>
				<View alignContent={'center'} alignItems={'center'} flexDirection={'row'} justifyContent={'space-between'} style={styles.text}>
					<Text h2>Connected</Text>
					<Icon name={'settings'} onPress={() => {ConnectionStore.prompt = true;}} raised/>
				</View>
				<FormLabel>Degree</FormLabel>
				<FormInput returnKeyType={'send'} placeholder={'z.B 70'} keyboardType={'numeric'} onChangeText={(text) => {ConnectionStore.degree = text;}}/>
				<View style={styles.buttonContainerStyle}>
					<RoundButton text={'Shoot'} onPress={this.send} backgroundColors={['#2d84a3', '#bb8cad']}/>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 65
	},
	text: {
		paddingLeft: 17,
		paddingRight: 17
	},
	buttonContainerStyle: {
		padding: 10
	}
});

export default Universe;
