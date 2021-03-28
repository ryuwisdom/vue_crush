<template>
  <div class="second-container">
    <p>Second Child</p>
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style>
.second-container {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: paleturquoise;
}
</style>
