import * as types from "./actionType";
import axios from "axios";

// const instance = axios.create({
// 	headers: { "Access-Control-Allow-Origin": "*" },
// });

// export default instance;

const getUsers = (users) => ({
	type: types.GET_USERS,
	payload: users,
});

const userDeleted = () => ({
	type: types.DELETE_USER,
});

const userAdded = () => ({
	type: types.ADD_USER,
});

const userUpdated = () => ({
	type: types.UPDATE_USER,
});

const getUser = (user) => ({
	type: types.GET_SINGLE_USER,
	payload: user,
});

const API_ENDPOINT = "http://localhost:5000/user";

// export const loadUsers = () => {
// 	console.log("LOAD USERS XXX", process.env.REACT_APP_API);
// 	return function (dispatch) {
// 		axios

// 			.get(`${process.env.REACT_APP_API}`)
// 			// .get(`http://localhost:5000/user`)
// 			.then((resp) => {
// 				console.log("resp", resp);
// 				dispatch(getUsers(resp.data));
// 			})
// 			.catch((error) => console.log(error));
// 	};
// };

export const loadUsers = () => {
	console.log("LOAD USERS XXX", process.env.REACT_APP_API, API_ENDPOINT);
	return async (dispatch) => {
		try {
			const resp = await axios.get(API_ENDPOINT);
			console.log("resp", resp);
			dispatch(getUsers(resp.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteUser = (id) => {
	return function (dispatch) {
		axios
			.delete(`${process.env.REACT_APP_API}/${id}`)
			// .delete(`http://localhost:5000/user/${id}`)

			.then((resp) => {
				console.log("resp", resp);
				dispatch(userDeleted());
				dispatch(loadUsers());
			})
			.catch((error) => console.log(error));
	};
};

export const addUser = (user) => {
	return function (dispatch) {
		axios
			.post(`${process.env.REACT_APP_API}`, user)

			// .post(`http://localhost:5000/user`, user)

			.then((resp) => {
				console.log("resp", resp);
				dispatch(userAdded());
				dispatch(loadUsers());
			})
			.catch((error) => console.log(error));
	};
};

export const getSingleUser = (id) => {
	return function (dispatch) {
		axios
			.get(`${process.env.REACT_APP_API}/${id}`)
			// .get(`http://localhost:5000/user/${id}`)

			.then((resp) => {
				console.log("resp", resp);
				dispatch(getUser(resp.data));
			})
			.catch((error) => console.log(error));
	};
};

export const updateUser = (user, id) => {
	return function (dispatch) {
		axios
			.put(`${process.env.REACT_APP_API}/${id}`, user)
			// .put(`http://localhost:5000/user/${id}`, user)

			.then((resp) => {
				console.log("resp", resp);
				dispatch(userUpdated());
			})
			.catch((error) => console.log(error));
	};
};
