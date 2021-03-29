<template>
  <div class="second-container">
    <h1>Second Child Page</h1>
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.second-container {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  background-color: paleturquoise;
}
</style>
