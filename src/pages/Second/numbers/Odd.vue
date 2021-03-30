<template>
  <div class="odd-box">
    <slot>
      <h3>odd {{ number }}</h3>
    </slot>
  </div>
</template>

<script>
export default {
  props: ['number'],
}
</script>

<style scoped>
.odd-box {
  width: 100%;
  height: 20px;
  border: 1px solid blue;
  margin-bottom: 5px;
}
</style>
