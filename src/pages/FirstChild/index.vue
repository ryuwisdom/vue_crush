<template>
  <div class="first-container">
    <h1>First Child Page</h1>
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.first-container {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  background-color: honeydew;
}
</style>
