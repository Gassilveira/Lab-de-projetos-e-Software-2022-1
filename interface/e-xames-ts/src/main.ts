/* vue */
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);

/* side Bar */
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import "@/assets/base.css";

/* Vue Axios*/
import axios from "axios";
import VueAxios from "vue-axios";
import { helpers, api } from "./Mixins";

/* Stores */

/* uses*/
app.use(createPinia());
app.use(router);
app.use(VueSidebarMenu);
app.use(VueAxios, { $axios: axios });
app.mixin(helpers);

/* API CALLS*/
app.config.globalProperties.$api = api;

/* mount */
app.mount("#app");
//app.config.productionTip = false;
