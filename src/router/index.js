import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

import HomeView from "../views/HomeView.vue";
import TasksView from "../views/TasksView.vue";
import AddTaskView from "../views/AddTaskView.vue";
import EditTaskView from "../views/EditTaskView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/login",
			name: "login",
			component: LoginView,
		},
		{
			path: "/register",
			name: "register",
			component: RegisterView,
		},
		{
			path: "/tasks",
			name: "tasks",
			component: TasksView,
			meta: {
				needsAuth: true,
			},
		},
		{
			path: "/tasks/new",
			name: "newTask",
			component: AddTaskView,
			meta: {
				needsAuth: true,
			},
		},
		{
			path: "/tasks/:taskId",
			name: "editTask",
			component: EditTaskView,
			props: true,
			meta: {
				needsAuth: true,
			},
		},
	],
});

router.beforeEach(async (to, from, next) => {
	const logged = store.getters["auth/getLogged"];

	if (to.meta.needsAuth && !logged) {
		next("/login");
	} else if (logged && (to.name == "login" || to.name == "register")) {
		next("/");
	} else {
		next();
	}
});

export default router;
