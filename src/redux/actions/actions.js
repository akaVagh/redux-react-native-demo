import * as actions from '../actionTypes';

export const incrementCount = () => {
	return {
		type: actions.INC,
	};
};
export const decrementCount = () => {
	return {
		type: actions.DEC,
	};
};
export const squareCount = () => {
	return {
		type: actions.SQR,
	};
};
export const powerCount = (input) => {
	return {
		type: actions.PWR,
		payload: input,
	};
};
export const resetCount = () => {
	return {
		type: actions.RST,
	};
};
