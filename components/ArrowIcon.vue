<template>
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="{ transform: rotate ? 'rotate(180deg)' : 'none' }"
  >
    <rect
      x="5.7782"
      width="2"
      height="8"
      transform="rotate(45 5.7782 0)"
      fill="#6FBC9A"
    />
    <rect
      x="7.19238"
      y="9.89954"
      width="2"
      height="8"
      transform="rotate(135 7.19238 9.89954)"
      fill="#6FBC9A"
    />
  </svg>
</template>

<script>
export default {
  props: {
    rotate: { type: Boolean },
  },
}
</script>

<style>
</style>