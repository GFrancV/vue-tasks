import request from "../request";

export default {
	getTasks() {
		return request.get("api/tasks");
	},

	createTask(task) {
		return request.post("api/tasks", task);
	},

	updateTask(taskId, task) {
		return request.put(`api/tasks/${taskId}`, task);
	},

	deleteTask(task) {
		return request.delete(`api/tasks/${task["_id"]}`);
	},
};
