import React from 'react';
import { Text, View } from 'react-native';

function SearchResultError() {
	return (
		<View>
			<Text style={{fontSize: 16}}>Could not find results. Try refining your search terms.</Text>
		</View>
	);
}

export default SearchResultError;