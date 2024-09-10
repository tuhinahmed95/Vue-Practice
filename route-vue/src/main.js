
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BIconBootstrap } from 'bootstrap-vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
