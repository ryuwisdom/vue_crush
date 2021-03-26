<template>
  <div class="five-container">
    <p>MultipleOfFive {{number}}</p>
  </div>
</template>
<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0
    },

  },

}
</script>
<style>
.five-container {
color: red;
}
</style>
