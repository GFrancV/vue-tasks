import api from "../../api";
import router from "../../router";

const state = () => ({
	loading: false,
	tasks: [],
});

const getters = {
	getTasks: state => state.tasks,

	getCompletedTasks: state => state.tasks.filter(task => task.completed),

	getUncompletedTasks: state => state.tasks.filter(task => !task.completed),

	getTask: state => taskId => {
		return state.tasks.find(task => task.id == taskId);
	},

	tasksLoading: state => state.loading,
};

const mutations = {
	SET_TASKS(state, tasks) {
		state.tasks = tasks;
	},

	CREATE_TASK(state, taskAdded) {
		state.tasks.push(taskAdded);
	},

	EDIT_TASK(state, taskEdited) {
		const foundTask = state.tasks.find(task => task.id == taskEdited.id);
		if (foundTask) {
			foundTask.title = taskEdited.title;
			foundTask.description = taskEdited.description;
		}
	},

	COMPLETE_TASK(state, taskCompleted) {
		const foundTask = state.tasks.find(task => task.id == taskCompleted.id);
		if (foundTask) {
			foundTask.completed = taskCompleted.completed ? 1 : 0;
		}
	},

	DELETE_TASK(state, taskDeleted) {
		const foundTask = state.tasks.find(task => task.id == taskDeleted.id);
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

	createTask({ commit }, task) {
		api.tasks
			.createTask(task)
			.then(res => {
				commit("CREATE_TASK", { ...task, id: res.data.id });
				router.go("-1");
			})
			.catch(err => console.error(err));
	},

	editTask({ commit }, task) {
		api.tasks
			.updateTask(task)
			.then(() => {
				commit("EDIT_TASK", task);
				router.push("/");
			})
			.catch(err => console.error(err));
	},

	completeTask({ commit }, task) {
		api.tasks
			.updateTask(task)
			.then(() => {
				commit("COMPLETE_TASK", task);
			})
			.catch(err => console.error(err));
	},

	deleteTask({ commit }, task) {
		api.tasks
			.deleteTask(task)
			.then(() => {
				commit("DELETE_TASK", task);
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
