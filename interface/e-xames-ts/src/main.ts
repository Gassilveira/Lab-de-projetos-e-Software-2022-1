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

/* social auth */
import axios, { AxiosInstance } from 'axios'
import { UniversalSocialauth } from 'universal-social-auth'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $axios: AxiosInstance;
        $Oauth: UniversalSocialauth;
    }
}

const options = {
    providers: {
        google: {
            clientId: '***************',
            redirectUri: 'https://myapp.com/auth/google/callback'
        },
    }
  }
const Oauth:UniversalSocialauth = new UniversalSocialauth(axios, options)

/* uses*/
app.use(createPinia())
app.use(router)
app.use(VueSidebarMenu)
app.config.globalProperties.$Oauth = Oauth
app.config.globalProperties.$axios = axios


/* mount */
app.mount('#app')
//app.config.productionTip = false;
