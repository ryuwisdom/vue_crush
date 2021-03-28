<template>
  <div class="first-container">
    <p>First Child</p>
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style>
.first-container {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: honeydew;
}
</style>
