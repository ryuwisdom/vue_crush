<template>
  <div class="even-container">
    <p>Even {{number}}</p>
  </div>
</template>
<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0
    },
    numberType: {
      type: Boolean
    }
  },

}
</script>
<style>
.even-container {
  background-color: silver;
}
</style>
