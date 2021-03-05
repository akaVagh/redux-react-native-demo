import * as actions from '../actionTypes';
import axios from 'axios';
import googleApi from '../googleApi';

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
				`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=${googleApi}`
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
