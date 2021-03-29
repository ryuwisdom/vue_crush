<template>
  <div class="third-container">
    <h1>Third Child Page</h1>
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.third-container {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  background-color: thistle;
}
</style>
