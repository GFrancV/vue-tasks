import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
//import "./assets/main.css";

const app = createApp(App);

app.use(router).use(store);

app.mount("#app");
