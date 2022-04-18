import { createApp } from 'vue'
import { useRouter } from 'vue-router'
import App from './App.vue'

const app = createApp(App)

app.use(useRouter)

app.mount('#app')
