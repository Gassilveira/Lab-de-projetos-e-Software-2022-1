import { createRouter, createWebHistory } from 'vue-router'
import '../assets/css/style.css'

import { authStore } from '../stores/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFound/NotFound.vue') 
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component:()=> import('../views/Login/Login.vue'),
      props: true,
      meta: {
        requiredAuth: false
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const auth = authStore();
  if(to.matched.some(record => record.meta.requiredAuth)) {
    if (auth.getLoginState) {
      next()
    }else {
      next({name: 'Login', params:{'redirectTo': from}});
    }
    return
  } else {
    next();
  }
});



export default router