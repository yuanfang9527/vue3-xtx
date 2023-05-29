<template>
  <AppTopnavVue />
    <AppHeaderVue />
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <AppFooterVue />
</template>

<script>
import AppTopnavVue from '@/components/app-topnav.vue'
import AppHeaderVue from '@/components/app-header.vue'
import AppFooterVue from '@/components/app-footer.vue'
import { useStore } from 'vuex'
export default {
  name: 'xtx-layout',
  components: {
    AppTopnavVue,
    AppHeaderVue,
    AppFooterVue
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
    return {}
  }
}
</script>

<style scoped lang="less"></style>
