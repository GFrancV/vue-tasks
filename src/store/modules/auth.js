import store from "..";
import api from "../../api";
import router from "../../router";

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
	setUser({ commit }) {
		api.auth
			.getUser()
			.then(res => {
				commit("LOGIN_USER", res.data);
				store.dispatch("tasks/getTasks");
			})
			.catch(err => console.error(`${err.response.status} ${err.response.data.message}`));
	},

	login({ commit }, context) {
		api.auth
			.login(context)
			.then(user => {
				commit("LOGIN_USER", user);
				store.dispatch("tasks/getTasks");
				router.push("/");
			})
			.catch(err => console.log(err));
	},

	logout({ commit }) {
		api.auth
			.logout()
			.then(() => {
				commit("LOGOUT_USER");
				store.dispatch("tasks/cleanTasks");
			})
			.catch(err => console.log(err));
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
