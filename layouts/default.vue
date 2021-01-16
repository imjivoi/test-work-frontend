<template>
  <div class="container">
    <Header @toggleSidebar="toggleSidebar" :open="sidebarOpen" />
    <transition name="fade-slide"> <Sidebar v-if="sidebarOpen" /> </transition>
    <div class="content"><nuxt /></div>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
export default {
  components: { Sidebar, Header },
  data: () => ({
    sidebarOpen: false,
    screen: null,
  }),
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
  },
}
</script>
<style scoped lang='scss'>
div {
  background-color: $colorGray3;
}

.content {
  padding: 40px 48px;
  width: inherit;
  flex: 1;

  @media screen and (max-width: 700px) {
    padding: 40px 16px;
  }
}
</style>
