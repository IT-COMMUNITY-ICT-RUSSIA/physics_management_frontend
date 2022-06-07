import LoginPage from "@/views/LoginPage.vue";
import SchedulePage from "@/views/SchedulePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import EnginePage from "@/views/EnginePage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/login", component: LoginPage },
  { path: "/about", component: AboutPage },
  { path: "/engine", component: EnginePage },
  { path: "/", component: SchedulePage },
  { path: "/:pathMatch(.*)*", component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
