import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Destinations from "../views/Destinations.vue";
import Tour from "../views/Tour";
import Orders from "../views/Orders";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/destinations",
    name: "Destinations",
    component: Destinations
  },
  {
    path: "/tour",
    name: "Tour",
    component: Tour
  },
  {
    path: "/orders-list",
    name: "Orders",
    component: Orders
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
