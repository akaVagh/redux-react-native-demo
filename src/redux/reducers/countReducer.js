import * as actions from '../actionTypes';

const initialState = {
	count: 0,
};

const countReducer = (state = initialState, action) => {
	//console.log('state', state);
	switch (action.type) {
		case actions.INC:
			return {
				...state,
				count: state.count + 1,
			};
		case actions.DEC:
			return {
				...state,
				count: state.count - 1,
			};
		case actions.SQR:
			return {
				...state,
				count: Math.pow(state.count, 2),
			};
		case actions.PWR:
			return {
				...state,
				count: Math.pow(state.count, action.payload),
			};
		case actions.RST:
			return {
				...state,
				count: 0,
			};

		default:
			return state;
	}
};
export default countReducer;
