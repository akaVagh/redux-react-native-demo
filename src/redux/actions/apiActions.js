import * as actions from '../actionTypes';
import axios from 'axios';
const GOOGLE_API = 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q';

// export const getOrigin = (res) => {
// 	return {
// 		type: actions.GET_ORIGIN,
// 		origin: res,
// 	};
// };

export const callApi = (placeid) => {
	return (dispatch) => {
		return axios
			.get(
				`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=${GOOGLE_API}`
			)
			.then((response) => {
				console.log(
					'res-------',
					response.data.result.geometry.location
				);
				dispatch({
					type: actions.GET_ORIGIN,
					origin: response.data.result.geometry.location,
				});
			});
	};
};
