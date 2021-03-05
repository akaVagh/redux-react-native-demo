import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import APICall from './src/components/APICall';
import Counter from './src/components/Counter';
import store from './src/redux/store';

export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<StatusBar style='auto' />
				<Counter />
				{/* <APICall /> */}
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
});
