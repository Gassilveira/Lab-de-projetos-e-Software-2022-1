/* vue */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
const app = createApp(App)

/* side Bar */
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import '@/assets/base.css';

/* uses*/
app.use(createPinia())
app.use(router)
app.use(VueSidebarMenu)



/* mount */
app.mount('#app')
//app.config.productionTip = false;
