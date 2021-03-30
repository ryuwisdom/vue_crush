<template>
  <div class="component-container">
    <br>
    <div v-for="number in 100" :key="number">
      <component :number="number" :is="numberComponent(number)">
      </component>
    </div>
  </div>
</template>

<script>
import Odd from '@/pages/Second/numbers/Odd';
import Even from '@/pages/Second/numbers/Even';

export default {
  methods: {
    numberComponent(number) {
      return number % 2 === 0 ? Even : Odd
    }
  },
}
</script>

<style scoped>
.component-container {
  width: 100%;
  height: 100vh;
  margin-top: 350px;
}
</style>
