import Vue from "vue";
import VueRouter from "vue-router";
import TaskList from "@/views/TaskList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: TaskList,
  },
  {
    path: "/task/new",
    name: "NewTask",
    component: () => import("../views/TaskForm"),
  },
  {
    path: "/task/:id/edit",
    name: "EditTask",
    component: () => import("../views/TaskForm"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
