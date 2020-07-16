import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Keyboard } from 'react-native';
import SearchResultError from './SearchResultError';
import SearchResultLoading from './SearchResultLoading';
import SearchResultSuccess from './SearchResultSuccess';

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	searchContainer: {
		flexDirection: 'row',
		marginBottom: 10,
	},
	formControl: {
		borderWidth: 2,
		borderColor: '#aaa',
		borderRadius: 5,
		fontSize: 20,
		marginRight: 5,
		flex: 1,
		backgroundColor: 'white',
		paddingLeft: 5,
		paddingRight: 5,
	}
});

class SearchScreen extends React.Component {
	state = {
		searchKeyword: "",
		resultType: false,
		resultData: [],
	}

	updateKeyword = text => {
		this.setState(prevState => ({ searchKeyword: text}));
	}

	findMovies = () => {
		// OMDb API Key = e5a691d0
		Keyboard.dismiss();
		this.setState(prevState => ({resultType: 'loading'}))
		fetch(`http://www.omdbapi.com/?apikey=e5a691d0&s=${this.state.searchKeyword}`, {
			method: 'GET'
		})
		.then((response) => response.json())
		.then((responseJson) => {
			const resultType = responseJson.Response === 'False' ? 'error' : 'success';
			this.setState(prevState => ({
				resultType: resultType,
				resultData: (resultType === 'error' ? [] : responseJson.Search)
			}))
		})
		.catch((error) => {
			console.error(error);
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.searchContainer}>
					<TextInput
						style={styles.formControl}
						placeholder="Search for a movie"
						returnKeyType="search"
						defaultValue={this.state.searchKeyword}
						onChangeText={text => (this.updateKeyword(text))}
						onSubmitEditing={this.findMovies}
					/>
					<Button
						title="  Go!  "
						onPress={this.findMovies}
						disabled={this.state.searchKeyword.trim().length <= 2}
					/>
				</View>

				{this.state.resultType === 'loading' && <SearchResultLoading />}
				{this.state.resultType === 'error' && <SearchResultError />}
				{this.state.resultType === 'success' && <SearchResultSuccess
					searchResult={this.state.resultData}
					navigation={this.props.navigation}
				/>}
			</View>
		);
	}
}

export default SearchScreen;
