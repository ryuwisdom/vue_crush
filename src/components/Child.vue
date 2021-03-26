<template>
  <div class="child-container" :class="isEven ? 'red' : 'blue'">
    {{ number }}
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
  computed: {
    isEven() {
      console.log(this.number)
      return this.number % 2 === 0
    }
  }
}
</script>

<style>
.child-container {
  margin-top: 3px;
  border: 1px solid grey;
  padding: 2px;
}

.red {
  color: crimson;
}

.blue {
  color: blue;
}
</style>
