import { createStore } from 'vuex'
import caratePersistedstate from 'vuex-persistedstate'

import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

// 创建vuex仓库并导出
export default createStore({
  state: {
    // 数据
  },
  mutations: {
    // 改数据函数
  },
  actions: {
    // 请求数据函数
  },
  modules: {
    // 分模块
    cart,
    user,
    category
  },
  getters: {
    // vuex的计算属性
  },
  plugins: [
    // vuex持久化插件
    caratePersistedstate({
      // 持久化的数据
      key: 'erabbit-client-pc',
      // 持久化的模块
      paths: ['user', 'cart']
    })
  ]

})
