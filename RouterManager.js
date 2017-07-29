import ConnectRoute from './routes/ConnectRoute';
import Universe from './routes/Universe';

class RouterManager {

	navigator = null;

	resetToInit() {
		this.navigator.resetTo({
			component: ConnectRoute,
			title: 'Connect to Universe'
		});
	}

	goToUniverse() {
		this.navigator.push({
			component: Universe,
			title: 'Universe'
		});
	}

}

export default new RouterManager();