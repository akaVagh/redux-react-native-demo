import * as actions from '../actionTypes';

const originState = {
	origin: {},
};

const apiReducer = (state = originState, action) => {
	//console.log('state', state);
	switch (action.type) {
		case actions.GET_ORIGIN:
			console.log('action', action);
			return {
				...state,
				origin: action.origin,
			};
		default:
			return state;
	}
};
export default apiReducer;
