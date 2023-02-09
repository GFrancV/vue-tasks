import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vue3Toasity, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/main.css";

store.dispatch("auth/getUser");

const app = createApp(App);

app.use(router).use(store).use(Vue3Toasity, {
	autoClose: 3000,
	hideProgressBar: true,
	theme: toast.THEME.COLORED,
	position: toast.POSITION.BOTTOM_RIGHT,
});

app.mount("#app");
