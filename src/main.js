import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'

import './assets/style.css'


createApp(App).use(MotionPlugin).use(router).mount('#app')