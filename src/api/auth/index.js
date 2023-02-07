import request from "../request";

export default {
	getUser: () => {
		return request.get("api/user");
	},

	login: async userCredentials => {
		let user = "";

		await request.get("/sanctum/csrf-cookie").then(async () => {
			await request.post("login", userCredentials).then(res => (user = res.data));
		});

		return user;
	},

	logout: () => {
		return request.post("logout");
	},
};
