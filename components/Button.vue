<template>
  <button :class="{ small: small }">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang='scss'>
button {
  background-color: $colorRed;
  color: #fff;
  min-width: 100%;
  padding: 15px 56px;
  border-radius: $borderRadius;
  cursor: pointer;
  border: none;
  @include font;

  &:focus {
    outline: none;

    box-shadow: 0px 2px 1px 2px $colorGray2;
  }

  &.small {
    background-color: transparent;
    box-shadow: 0 0 0 1px $colorGray2;
    color: $colorGray2;
    padding: 8px 13px;
    font-size: 12px;
    font-weight: 500;
    min-width: unset;
    transition: 0.3s;

    &:hover {
      box-shadow: 0 0 0 1px $colorRed;
      color: $colorRed;
      transition: 0.3s;
    }
  }
}
</style>