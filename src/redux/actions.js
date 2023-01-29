import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
	type: types.GET_USERS,
	payload: users,
});

// const userDeleted = () => ({
// 	type: types.DELETE_USER,
// });

const userAdded = () => ({
	type: types.ADD_USER,
});

// const userUpdated = () => ({
// 	type: types.UPDATE_USER,
// });

// const getUser = (user) => ({
// 	type: types.GET_SINGLE_USER,
// 	payload: user,
// });

//Load Users
export const loadUsers = () => {
	return function (dispatch) {
		axios
			.get(`${process.env.REACT_APP_API}`)
			.then((resp) => {
				console.log("resp", resp);
				dispatch(getUsers(resp.data));
			})
			.catch((error) => console.log(error));
	};
};

//Add User
export const addUser = (user) => {
	return function (dispatch) {
		axios
			.post(`${process.env.REACT_APP_API}`, user)
			.then((resp) => {
				console.log("resp", resp);
				dispatch(userAdded());
				dispatch(loadUsers());
			})
			.catch((error) => console.log(error));
	};
};
