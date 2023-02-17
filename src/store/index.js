import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import tasks from "./modules/tasks";
import auth from "./modules/auth";

export default createStore({
	state: {},
	mutations: {},
	modules: {
		tasks,
		auth,
	},
});
