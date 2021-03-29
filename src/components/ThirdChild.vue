<template>
  <div class="third-container">
    <p>Third Child</p>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: thistle;
}
</style>
