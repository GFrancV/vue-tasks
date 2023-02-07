import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TaskForm from "../components/tasks/TaskForm.vue";
import LoginForm from "../components/LoginForm.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/AboutView.vue"),
		},
		{
			path: "/login",
			name: "login",
			component: LoginForm,
		},
		{
			path: "/task/:taskId",
			name: "editTask",
			component: TaskForm,
			props: true,
		},
		{
			path: "/task/new",
			name: "newTask",
			component: TaskForm,
		},
	],
});

export default router;
