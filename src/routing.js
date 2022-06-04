import LoginPage from "@/views/LoginPage.vue";
import SchedulePage from "@/views/SchedulePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/login", component: LoginPage },
  { path: "/about", component: AboutPage },
  { path: "/", component: SchedulePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
