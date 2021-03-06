import LoginPage from "@/views/LoginPage.vue";
import SchedulePage from "@/views/SchedulePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/login", component: LoginPage },
  { path: "/schedule", component: SchedulePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
