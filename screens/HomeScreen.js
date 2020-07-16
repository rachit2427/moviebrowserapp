import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	welcomeText: {
		fontSize: 40,
	},
	welcomeHelper: {
		fontSize: 24,
		marginBottom: 20
	},
	btnContainer: {
		paddingLeft: 40,
		paddingRight: 40,
		width: '100%'
	}
});

class HomeScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcomeText}> Welcome </Text>
				<Text style={styles.welcomeHelper}> To the biggest movie DB </Text>
				<View style={styles.btnContainer}>
					<Button
						title=" Let's Go! "
						onPress={() => {this.props.navigation.navigate('SearchScreen')}}
					/>
				</View>
			</View>
		);
	}
}

export default HomeScreen;
