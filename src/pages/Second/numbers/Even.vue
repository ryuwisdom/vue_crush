<template>
  <div class="even-box">
    <h3>even {{ number }}</h3>
  </div>
</template>

<script>
export default {
  props: ['number'],
}
</script>

<style scoped>
.even-box {
  width: 100%;
  height: 30px;
  border: 1px solid deeppink;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-end;
}
</style>
