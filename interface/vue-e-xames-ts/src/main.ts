import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import RouterNav from 'vue-router-nav'
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(RouterNav);
app.mount("#app");
