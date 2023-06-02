import { createApp } from 'vue'
import store from './store'
// import App from './App.vue'
import App from '@/views/01_store基本使用.vue'
createApp(App).use(store).mount('#app')
