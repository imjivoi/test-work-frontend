<template>
  <div class="input">
    <label for="input" v-show="label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      name="input"
      :class="{ outline: !border }"
      :value="value"
      :style="{
        borderColor: errors && errors.length && !border ? '#d6073d' : '',
        boxShadow: errors && errors.length && border ? '0 0 0 1px #d6073d' : '',
      }"
      @input="$emit('input', $event.target.value)"
    />
    <p v-show="errors" v-for="error in errors" :key="error">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
    label: {
      type: String,
    },
    border: {
      type: Boolean,
      default: true,
    },
    value: {
      type: String,
    },
    errors: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style scoped lang='scss'>
.input {
  display: flex;
  flex-direction: column;
  margin: 0 0 16px;

  label {
    color: $colorGray;
    font-size: 14px;
    font-weight: 400;
  }

  input {
    border-radius: $borderRadius;
    box-shadow: 0 0 0 1px $colorGray2;
    border: none;
    padding: 11px 20px 13px;
    min-width: 100%;
    transition: 0.3s;
    color: $colorBlack;
    @include font;

    &:focus {
      transition: 0.3s;

      outline: none;
      box-shadow: 0px 2px 1px 2px $colorGray2;
    }

    &.outline {
      box-shadow: 0 0 0 0 $colorGray2;
      border-bottom: 1px $colorGray2 solid;
      border-radius: 0;
      padding: 11px 0 8px;
    }
  }
  p {
    margin: 8px 0 0;
    color: $colorRed;
    font-size: 10px;
    font-weight: 400;
  }
}
</style>