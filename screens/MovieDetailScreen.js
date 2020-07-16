import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	imageContainer: {
		alignItems: 'center',
		marginBottom: 20
	},
	image: {
		height: 300,
		width: 300,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 10
	},
	bullet: {
		paddingTop: 5,
		fontSize: 24
	}
});

class MovieDetailScreen extends React.Component {
	static navigationOptions = ({navigation}) => ({
		headerTitle: `${navigation.getParam('movie', {Title: 'Movie Details'}).Title}`,
	});

	render() {
		const movie = this.props.navigation.getParam('movie') || {};
		return (
			<ScrollView style={styles.container}>
				<Text style={styles.title}>{movie.Title}</Text>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={{uri: movie.Poster}} />
				</View>
				<Text style={styles.bullet}>Type: {movie.Type}  </Text>
				<Text style={styles.bullet}>Year: {movie.Year}  </Text>
				<Text style={styles.bullet}>IMDB ID: {movie.imdbID}  </Text>
			</ScrollView>
		);
	}
}

export default MovieDetailScreen;
