import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TasksView from "../views/TasksView.vue";
import TaskForm from "../components/tasks/TaskForm.vue";
import LoginView from "../views/LoginView.vue";
import { mapGetters } from "vuex";
import store from "../store";

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
			component: TaskForm,
			meta: {
				needsAuth: true,
			},
		},
		{
			path: "/tasks/:taskId",
			name: "editTask",
			component: TaskForm,
			props: true,
			meta: {
				needsAuth: true,
			},
		},
	],
});

router.beforeEach((to, from, next) => {
	const logged = store.getters["auth/getLogged"];

	if (to.meta.needsAuth && !logged) {
		next("/login");
	} else {
		next();
	}
});

export default router;
