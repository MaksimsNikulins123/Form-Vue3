<template>
  <button class="btn">
      <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style>
.btn {
  padding: 10px 15px;
  background: none;
  color: #000;
  border: 1px solid #000;
}
</style>