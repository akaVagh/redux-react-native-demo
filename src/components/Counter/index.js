import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/actions';
const Counter = (props) => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const [input, setinput] = useState();
	console.log('input----', input);
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.counter}>Count: {state.count}</Text>
			</View>
			<View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => dispatch(actions.incrementCount())}
				>
					<Text style={styles.btnText}>Increase</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => dispatch(actions.decrementCount())}
				>
					<Text style={styles.btnText}>Decrease</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => dispatch(actions.squareCount())}
				>
					<Text style={styles.btnText}>Square</Text>
				</TouchableOpacity>
				<TextInput
					style={styles.txtInput}
					value={input}
					onChangeText={(text) => setinput(text)}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={() => dispatch(actions.powerCount(input))}
				>
					<Text style={styles.btnText}>Power</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => dispatch(actions.resetCount())}
				>
					<Text style={styles.btnText}>Reset</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
export default Counter;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	counter: {
		color: '#004080',
		fontSize: 50,
		fontWeight: 'bold',
	},
	txtInput: {
		height: 30,
		borderColor: '#000',
		borderWidth: 2,
	},
	button: {
		backgroundColor: '#004000',
		alignItems: 'center',
		padding: 5,
		margin: 2,
	},
	btnText: { color: '#fff', fontSize: 20, fontWeight: '300' },
});
