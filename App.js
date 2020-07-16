import React from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';
import AppNavigator from './navigators/AppNavigator';

function App() {
	return (
		<View style={{flex: 1, paddingTop: Constants.statusBarHeight}}>
			<AppNavigator />
		</View>
	);
}

export default App;
