import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "浏览题目",

    component: () => import("@/views/HomeView.vue"),
  },

  {
    path: "/admin",
    name: "管理员可见",
    component: () => import("@/views/AdminView.vue"),
    meta: {
      access: "canAdmin",
    },
  },
  {
    path: "/about",
    name: "关于我的",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: () => import("@/views/NoAuthView.vue"),
  },
];
