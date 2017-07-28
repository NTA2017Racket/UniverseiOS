import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, PixelRatio, Dimensions, TextInput} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { FormLabel, FormInput,  } from 'react-native-elements'
import ButtonComponent, {RoundButton} from 'react-native-button-component';
import ConnectionStore from '../stores/ConnectionStore';
import {observer} from 'mobx-react';
import * as Animatable from 'react-native-animatable';

@observer
class ConnectPage extends Component {

	constructor(props) {
		super(props);

		this.connect = function () {
			ConnectionStore.connect();
		};

		this.ButtonStates = {
			notConnected: {
				text: 'Connect',
				onPress: this.connect,
				backgroundColors: ['#393b64', '#347d92']
			},
			connecting: {
				text: 'Connecting...',
				spinner: true,
				backgroundColors: ['#393b64', '#347d92'],
				onPress() {
					ConnectionStore.setCurrentState('notConnected');
				}
			},
			error: {
				text: 'Error',
				backgroundColors: ['#D50000', '#F44336'],
				onPress: this.connect
			}
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<ParallaxScrollView
					headerBackgroundColor="#333"
					stickyHeaderHeight={STICKY_HEADER_HEIGHT}
					parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
					backgroundSpeed={10}

					renderBackground={() => (
						<View key="background">
							<Image style={styles.backgroundImage} source={require('../assets/Background.jpg')}/>
							<View style={{
								position: 'absolute',
								top: 0,
								width: window.width,
								backgroundColor: 'rgba(0,0,0,.4)',
								height: PARALLAX_HEADER_HEIGHT
							}}/>
						</View>
					)}

					renderForeground={() => (
						<View key="parallax-header" style={styles.parallaxHeader}>
							<Image style={styles.avatar} source={require('../assets/Icon.png')}/>
							<Text style={styles.sectionSpeakerText}>
								Universe
							</Text>
							<Text style={styles.sectionTitleText}>
								By Felix N., Tom S. and Nils B.
							</Text>
						</View>
					)}>
					<View>
						<FormLabel>Hostname and IP</FormLabel>
						<FormInput onChangeText={(text) => ConnectionStore.setHostname(text)}/>
						<FormLabel>Port</FormLabel>
						<FormInput onChangeText={(text) => ConnectionStore.setPort(text)} defaultValue={'8080'}/>
						<FormLabel>Username</FormLabel>
						<FormInput onChangeText={(text) => ConnectionStore.setUsername(text)} defaultValue={'anonym'}/>
						<View style={styles.buttonStyle}>
							<RoundButton states={this.ButtonStates} buttonState={ConnectionStore.CurrentState}/>
						</View>
						{ConnectionStore.ButtonError !== '' && (
							<View style={styles.errorText}>
								<Animatable.Text style={{color: '#c81c1f'}} animation={ConnectionStore.ErrorAnimation}>{ConnectionStore.ButtonError}</Animatable.Text>
							</View>
						)}
					</View>
				</ParallaxScrollView>
			</View>
		)
	}

}

export default Animatable.createAnimatableComponent(ConnectPage);

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
	buttonStyle: {
		padding: 10
	},
	errorText: {
		padding: 10,
		paddingLeft: 15
	},
	container: {
		flex: 1,
		backgroundColor: 'black'
	},
	background: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: window.width,
		height: PARALLAX_HEADER_HEIGHT
	},
	backgroundImage: {
		width: window.width,
		height: PARALLAX_HEADER_HEIGHT
	},
	stickySection: {
		height: STICKY_HEADER_HEIGHT,
		width: 300,
		justifyContent: 'flex-end'
	},
	stickySectionText: {
		color: 'white',
		fontSize: 20,
		margin: 10
	},
	fixedSection: {
		position: 'absolute',
		bottom: 10,
		right: 10
	},
	fixedSectionText: {
		color: '#999',
		fontSize: 20
	},
	parallaxHeader: {
		alignItems: 'center',
		flex: 1,
		flexDirection: 'column',
		paddingTop: 100
	},
	avatar: {
		marginBottom: 10,
		borderRadius: AVATAR_SIZE / 2,
		height: AVATAR_SIZE,
		width: AVATAR_SIZE
	},
	sectionSpeakerText: {
		color: 'white',
		fontSize: 24,
		paddingVertical: 5
	},
	sectionTitleText: {
		color: 'white',
		fontSize: 18,
		paddingVertical: 5
	},
	row: {
		overflow: 'hidden',
		paddingHorizontal: 10,
		height: ROW_HEIGHT,
		backgroundColor: 'white',
		borderColor: '#ccc',
		borderBottomWidth: 1,
		justifyContent: 'center'
	},
	rowText: {
		fontSize: 20
	}
});