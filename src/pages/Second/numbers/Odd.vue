<template>
  <div class="odd-box">
    <h3 @click="click(name)">{{ name }} {{ number | separateNum }}</h3>
  </div>
</template>

<script>
import mixins from '@/pages/Second/mixins.js';

export default {
  props: ['number'],
  mixins: [mixins],
  data() {
    return {
      name: 'odd'
    }
  }
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
