<template>
  <div class="second-container">

    <slot>
      <p>Second Child+_+</p>
    </slot>
  </div>
</template>
<script>
export default {
}
</script>
<style>
.second-container {
  width: 100%;
  height: 80vh;
  background-color: slateblue;
}
</style>
