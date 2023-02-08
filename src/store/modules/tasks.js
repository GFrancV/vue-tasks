import api from "../../api";
import router from "../../router";

const state = () => ({
	tasks: [],
});

const getters = {
	getTasks: state => state.tasks,

	getCompletedTasks: state => state.tasks.filter(task => task.completed),

	getUncompletedTasks: state => state.tasks.filter(task => !task.completed),

	getTask: state => id => {
		return state.tasks.find(task => task.id == id);
	},
};

const mutations = {
	SET_TASKS(state, payload) {
		state.tasks = payload;
	},

	CREATE_TASK(state, payload) {
		state.tasks.push(payload);
	},

	EDIT_TASK(state, payload) {
		const foundTask = state.tasks.find(task => task.id == payload.id);
		if (foundTask) {
			foundTask.title = payload.title;
			foundTask.description = payload.description;
		}
	},

	COMPLETE_TASK(state, payload) {
		const foundTask = state.tasks.find(task => task.id == payload.id);
		if (foundTask) {
			foundTask.completed = payload.completed;
		}
	},

	DELETE_TASK(state, payload) {
		const foundTask = state.tasks.find(task => task.id == payload.id);
		if (foundTask) {
			state.tasks.splice(state.tasks.indexOf(foundTask), 1);
		}
	},

	CLEAN_TASKS(state) {
		state.tasks = [];
	},
};

const actions = {
	getTasks({ commit }) {
		api.tasks.getTasks().then(res => commit("SET_TASKS", res.data));
	},

	cleanTasks({ commit }) {
		commit("CLEAN_TASKS");
	},

	createTask({ commit }, context) {
		api.tasks
			.createTask(context)
			.then(res => {
				commit("CREATE_TASK", { ...context, id: res.data.id });
				router.go("-1");
			})
			.catch(err => console.error(err));
	},

	editTask({ commit }, context) {
		api.tasks
			.updateTask(context)
			.then(() => {
				commit("EDIT_TASK", context);
				router.push("/");
			})
			.catch(err => console.error(err));
	},

	completeTask({ commit }, context) {
		api.tasks
			.updateTask(context)
			.then(() => {
				commit("COMPLETE_TASK", context);
			})
			.catch(err => console.error(err));
	},

	deleteTask({ commit }, context) {
		api.tasks
			.deleteTask(context)
			.then(() => {
				commit("DELETE_TASK", context);
			})
			.catch(err => console.error(err));
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
