<template>
  <div class="odd-container">
    <p> Odd {{number}}</p>
  </div>
</template>
<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0
    },
  }
}
</script>
<style>
.odd-container {
  background-color: azure;
}
</style>
