<template>
  <input
      :value="modelValue"
      @input="updateInput"
      type="text"
      class="input"
  >
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],

  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue',event.target.value)

    }
  }
}
</script>

<style scoped>
  .input {
    width: 100%;
    border: 1px solid green;
    margin: 10px;
    margin-left: 0;
    padding: 10px;
    font-size: 14px;
  }
</style>
