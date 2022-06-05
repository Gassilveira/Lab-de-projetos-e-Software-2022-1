import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios';
import VueAxios from 'vue-axios'
import VueSocialauth from 'vue-social-auth'

import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import '@/assets/base.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSidebarMenu)
app.use(VueAxios, axios)
app.use(VueSocialauth, {
    providers: {
      google: {
        clientId: '',
        redirectUri: '/auth/github/callback' // Your client app URL
      }
    }
  })
app.config.productionTip = false;
app.mount('#app')
