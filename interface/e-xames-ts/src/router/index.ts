import { createRouter, createWebHistory } from "vue-router";
import "../assets/css/style.css";

import { authStore } from "../stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/NotFound/NotFound.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home/Home.vue"),
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login/Login.vue"),
      props: true,
      meta: {
        requiredAuth: false,
      },
    },
    {
      path: "/manutencao/usuario",
      name: "MaintenanceUser",
      component: () => import("../views/MaintenanceUser/MaintenanceUser.vue"),
      props: true,
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/manutencao/clinica",
      name: "MaintenanceClinic",
      component: () => import("../views/MaintenanceClinic/MaintenanceClinic.vue"),
      props: true,
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/exames",
      name: "ViewExams",
      component: () => import("../views/ViewExams/ViewExams.vue"),
      props: true,
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/exames/enviar",
      name: "SendExams",
      component: () => import("../views/SendExams/SendExams.vue"),
      props: true,
      meta: {
        requiredAuth: true,
      },
    }
  ],
});

router.beforeEach(async (to, from, next) => {
  const auth = authStore();
  console.log(auth);
  if (to.matched.some((record) => record.meta.requiredAuth)) {
    if (auth.getLoginState) {
      next();
    } else {
      next({ name: "Login", params: { redirectTo: from } });
    }
    return;
  } else {
    next();
  }
});

export default router;
