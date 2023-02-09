import api from "../../api";
import router from "../../router";

const state = () => ({
	tasks: [],
	loading: false,
});

const getters = {
	getTasks: state => state.tasks,

	getCompletedTasks: state => state.tasks.filter(task => task.completed),

	getUncompletedTasks: state => state.tasks.filter(task => !task.completed),

	getTask: state => id => {
		return state.tasks.find(task => task.id == id);
	},

	tasksLoading: state => state.loading,
};

const mutations = {
	SET_TASKS(state, tasks) {
		state.tasks = tasks;
	},

	CREATE_TASK(state, task) {
		state.tasks.push(task);
	},

	EDIT_TASK(state, task) {
		const foundTask = state.tasks.find(task => task.id == task.id);
		if (foundTask) {
			foundTask.title = task.title;
			foundTask.description = task.description;
		}
	},

	COMPLETE_TASK(state, task) {
		const foundTask = state.tasks.find(task => task.id == task.id);
		if (foundTask) {
			foundTask.completed = task.completed ? 1 : 0;
		}
	},

	DELETE_TASK(state, task) {
		const foundTask = state.tasks.find(task => task.id == task.id);
		if (foundTask) {
			state.tasks.splice(state.tasks.indexOf(foundTask), 1);
		}
	},

	CLEAN_TASKS(state) {
		state.tasks = [];
	},
};

const actions = {
	getTasks({ commit, state }) {
		state.loading = true;

		api.tasks.getTasks().then(res => {
			commit("SET_TASKS", res.data);
			state.loading = false;
		});
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
