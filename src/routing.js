import LoginPage from "@/views/LoginPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [{ path: "/login", component: LoginPage }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
