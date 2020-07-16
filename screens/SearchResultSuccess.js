import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
	card: {
		backgroundColor: 'white',
		marginBottom: 10,
		padding: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 2,  
		elevation: 5
	},
	movieDetail: {
		paddingTop: 10,
		paddingBottom: 10,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	horizontalRule: {
		borderTopColor: '#aaa',
		borderTopWidth: 2,
		marginTop: 1,
		marginBottom: 1,
	},
	listWrapper: {
		paddingBottom: 100
	}
});

export function MovieItemCard(props) {
	return (
		<TouchableHighlight underlayColor='white' onPress={() => {props.navigation.navigate('MovieDetailScreen', {
			movie: props.movie, 
		})}}>
			<View style={styles.card}>
				<Text>{props.movie.Title}</Text>
				<View style={styles.horizontalRule} />
				<View style={styles.movieDetail}>
					<Text>Year: {props.movie.Year}</Text>
					<Text>IMDB: {props.movie.imdbID}  </Text>
				</View>
			</View>
		</TouchableHighlight>
	);
}

function SearchResultSuccess(props) {
	console.log(props)
	const renderItem = obj => <MovieItemCard key={obj.index} movie={obj.item} navigation={props.navigation} />;
	return (
		<View style={styles.listWrapper}>
			<FlatList 
				renderItem={renderItem}
				data={props.searchResult}
				keyExtractor={(item, index) => (index.toString())}
			/>
		</View>
	);
}

export default SearchResultSuccess;