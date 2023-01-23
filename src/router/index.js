// DEFINE ROUTER RULES //
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    },
    {
      path: "/cars/:id/",
      name: "car",
      component: () => import(/* webpackChunkName: "car" */ "@/views/Car.vue"),
      children: [
        {
          path: "contact",
          component: () =>
            import(/* webpackChunkName: "contact" */ "@/views/Contact.vue"),
        },
      ],
    },
    {
      path: "/:catchall(.*) *",
      name: "error404",
      component: () =>
        import(/* webpackChunkName: "error404" */ "@/views/Error404.vue"),
    },
  ],
});

export default router;
