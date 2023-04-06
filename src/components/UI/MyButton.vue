<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
name: "my-button"
}
</script>

<style scoped>
.btn {
  margin-top: 15px;
  padding: 5px;
  color: teal;
  cursor: pointer;
}
</style>
