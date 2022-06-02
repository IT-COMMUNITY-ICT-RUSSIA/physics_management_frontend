import { createApp } from "vue";
import { useRouter } from "vue-router";
import App from "./App.vue";
import router from "./routing";
import dayjs from "dayjs";
import VueCountdown from "@chenfengyuan/vue-countdown";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import "dayjs/locale/ru";
import "dayjs/plugin/relativeTime";

dayjs.locale("ru");

const app = createApp(App);

app.config.globalProperties.$dayjs = dayjs;

app.component(VueCountdown.name, VueCountdown);

app.use(Toast);
app.use(useRouter);
app.use(router);

app.mount("#app");

export default app;
