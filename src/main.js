import { createApp } from "vue";
import { useRouter } from "vue-router";
import App from "./App.vue";
import router from "./routing";

const app = createApp(App);

app.use(useRouter);
app.use(router);

app.mount("#app");
