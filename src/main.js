import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Modal from 'vue3-modal';

const app = createApp(App)

app.use(router)

app.mount('#app')
