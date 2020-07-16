import React from 'react';
import { Text, View } from 'react-native';

function SearchResultLoading() {
	return (
		<View>
			<Text style={{fontSize: 16}}>Fetching Your Data...</Text>
		</View>
	);
}

export default SearchResultLoading;