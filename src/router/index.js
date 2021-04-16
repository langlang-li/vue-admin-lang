import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    /* { path: "/", name: "Home", component: Home },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    }, */
    {
      path: "/",
      name: "Login",
      component: () => import("../views/Login.vue"),
    },
  ],
});

export default router;
