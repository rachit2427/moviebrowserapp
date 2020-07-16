import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import MovieDetailScreen from '../screens/MovieDetailScreen'

const Navigator = createStackNavigator({
	'HomeScreen': {
		screen: HomeScreen,
		navigationOptions: ({ navigation }) => ({
			title: `Home`,
			headerTitleAlign: 'center'
		})
	},
	'SearchScreen': {
		screen: SearchScreen,
		navigationOptions: ({ navigation }) => ({
			title: `Find Movie`,
			headerTitleAlign: 'center'
		})
	},
	'MovieDetailScreen': {
		screen: MovieDetailScreen,
		navigationOptions: ({ navigation }) => ({
			headerTitleAlign: 'center'
		})
	},
}, {
	initialRouteName: 'HomeScreen',
});

const AppNavigator = createAppContainer(Navigator);

export default AppNavigator;
