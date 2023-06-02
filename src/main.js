import { createApp } from 'vue'
import store from './store'
// import App from './App.vue'
// import App from '@/views/01_store基本使用及mapState映射.vue'
import App from '@/views/02_store核心getters的使用.vue'
createApp(App).use(store).mount('#app')
