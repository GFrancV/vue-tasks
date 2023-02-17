import Cookies from "js-cookie";
import { toast } from "vue3-toastify";
import store from "..";
import api from "../../api";
import router from "../../router";

import requestApi from "../../api/request";

const state = () => ({
	logged: false,
	user: null,
});

const getters = {
	getLogged: state => state.logged,

	getUser: state => state.user,
};

const mutations = {
	LOGIN_USER(state, payload) {
		state.logged = true;
		state.user = payload;
	},

	LOGOUT_USER(state) {
		state.logged = false;
		state.user = null;
	},
};

const actions = {
	getUser({ commit }) {
		if (Cookies.get("token")) {
			(requestApi.defaults.headers.common = { Authorization: `Bearer ${Cookies.get("token")}` }),
				api.auth
					.getUser()
					.then(res => {
						commit("LOGIN_USER", res.data);
						store.dispatch("tasks/getTasks");
					})
					.catch(err => console.error(`${err.response.status} ${err.response.data.message}`));
		}
	},

	login({ dispatch }, context) {
		return new Promise((resolve, reject) => {
			api.auth
				.login(context)
				.then(data => {
					Cookies.set("token", data.token, { expires: 15 / 1440 });

					dispatch("getUser");

					resolve();
					router.push("/");
					toast.success(`Welcome ${data.user.name}`);
				})
				.catch(err => {
					reject(err.response.data);
					toast.error(err.response.data.message);
				});
		});
	},

	register({ dispatch }, userInformation) {
		return new Promise((resolve, reject) => {
			api.auth
				.register(userInformation)
				.then(res => {
					Cookies.set("token", res.data.token, { expires: 15 / 1440 });
					resolve();
					router.push("/");
					toast.success(`Registred successfuly. Welcome ${userInformation.name}.`);

					dispatch("getUser");
				})
				.catch(err => {
					reject(err.response.data);
					toast.error(err.response.data.message);
				});
		});
	},

	logout({ commit }) {
		Cookies.remove("token");
		commit("LOGOUT_USER");
		store.dispatch("tasks/cleanTasks");
		router.push("/");
		toast.success("Logout success!");
		/* 	api.auth
			.logout()
			.then(() => {
				commit("LOGOUT_USER");
				store.dispatch("tasks/cleanTasks");
				router.push("/");
				toast.success("Logout success!");
			})
			.catch(err => console.log(err)); */
	},
};

const module = {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};

export default module;
