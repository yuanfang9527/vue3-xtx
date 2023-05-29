import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/common.less'

import 'normalize.css'

// 创建一个vue应用实例
createApp(App).use(store).use(router).mount('#app')
