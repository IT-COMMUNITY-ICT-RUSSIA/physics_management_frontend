import { createApp } from "vue";
import { useRouter } from "vue-router";
import App from "./App.vue";
import router from "./routing";
import dayjs from "dayjs";
import "dayjs/locale/ru";

dayjs.locale("ru");
const app = createApp(App);

app.config.globalProperties.$dayjs = dayjs;

app.use(useRouter);
app.use(router);

app.mount("#app");
