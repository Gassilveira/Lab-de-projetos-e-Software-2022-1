import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import '../assets/css/style.css'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      name: 'ManutencaoContasDeUsuario',
      path: '/manutencao/usuario',
      component: () => import("../views/ManutencaoContasDeUsuario.vue")
    },
    {
      name: 'UploadExames',
      path: '/exames/enviar',
      component: () => import("../views/UploadExames.vue")
    },
    {
      name: 'ManutencaoContasDeClinica',
      path: '/manutencao/clinica',
      component: () => import("../views/ManutencaoContasDeClinica.vue")
    },
    {
      name: 'Exames',
      path: '/exames',
      component: () => import("../views/Exames.vue")
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import("../views/Login.vue")
    },
  ],
});

export default router;
