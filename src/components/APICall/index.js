import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/apiActions';
const APICall = (props) => {
	const [placeid, setplaceid] = useState();
	const state = useSelector((state) => state.api.origin);
	console.log('state', state);
	//console.log('placeid', placeid);
	const dispatch = useDispatch();
	return (
		<View>
			<Text>APICall</Text>
			<TextInput
				style={styles.txtIP}
				value={placeid}
				onChangeText={(text) => setplaceid(text)}
			/>
			<TouchableOpacity
				style={styles.button}
				onPress={() => dispatch(actions.callApi(placeid))}
			>
				<Text style={{ color: '#fff' }}>Submit</Text>
			</TouchableOpacity>
		</View>
	);
};
export default APICall;

const styles = StyleSheet.create({
	txtIP: {
		borderColor: 'black',
		borderWidth: 1,
		width: 200,
	},
	button: {
		backgroundColor: '#004000',
		alignItems: 'center',
		padding: 5,
		margin: 2,
	},
});
