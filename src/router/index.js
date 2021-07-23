import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    // component:Login
    component:()=>import( "@/views/login/") //路由懒加载
  },

];

const router = new VueRouter({
  routes,
});

export default router;
