import request from "../request";

export default {
	getUser: () => {
		return request.get("api/user");
	},

	login: async userCredentials => {
		await request.get("/sanctum/csrf-cookie");
		return (await request.post("login", userCredentials)).data;
	},

	register: userInformation => {
		return request.post("register", userInformation);
	},

	logout: () => {
		return request.post("logout");
	},
};
