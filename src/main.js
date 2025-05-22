import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//import store from "./store";
import { createPinia } from "pinia"; // Add this

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");

//createApp(App).use(store).use(router).mount("#app");
