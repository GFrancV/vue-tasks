import request from "../request";

export default {
	getUser: () => {
		return request.get("api/user");
	},

	login: async userCredentials => {
		await request.get("/sanctum/csrf-cookie");
		return (await request.post("login", userCredentials)).data;
	},

	logout: () => {
		return request.post("logout");
	},
};
