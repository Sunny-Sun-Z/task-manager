import { createApp } from "vue";
import App from "./App.vue";
//import router from "./router";
//import store from "./store";
import { createPinia } from "pinia"; // Add this

const app = createApp(App);
app.use(createPinia());
app.mount("#app");
