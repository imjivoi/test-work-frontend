<template>
  <header>
    <div class="burger" :class="{ open: open }" @click="$emit('toggleSidebar')">
      <span></span>
      <span></span>
    </div>
    <Logo width="80" height="26" />
  </header>
</template>

<script>
import Logo from './Logo'
export default {
  props: ['open'],
  components: { Logo },
}
</script>

<style scoped lang='scss'>
header {
  height: 64px;
  width: 100%;
  background-color: #fff;
  padding: 0 22px;
  display: none;
  align-items: center;

  @media screen and (max-width: 700px) {
    display: flex;
  }
}

.burger {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 20px;
  z-index: 100;
  margin-right: 46px;
  cursor: pointer;
  span {
    width: 20px;
    height: 2px;
    background-color: $colorRed;
    position: relative;
    transition: 0.3s;
  }

  &.open {
    span {
      &:first-child {
        transform: rotate(45deg);
        top: 5px;
        transition: 0.3s;
      }
      &:last-child {
        transform: rotate(-45deg);
        bottom: 4px;
        transition: 0.3s;
      }
    }
  }
}
</style>