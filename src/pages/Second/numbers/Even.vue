<template>
  <div class="even-box">
    <h3 @click="click(name)"> {{ name }} {{ number | separateNum }}</h3>
  </div>
</template>
<script>
import mixins from '@/pages/Second/mixins.js';

export default {
  props: ['number'],
  mixins: [mixins],
  data() {
    return {
      name: 'even'
    }
  },
  beforeCreate() {
    console.log('child - beforeCreate')
  },
  created() {
    console.log('child - created')
  },
  beforeMount() {
    console.log('child - beforeMount')
  },
  mounted() {
    console.log('child - mounted')
  },
  beforeUpdate() {
    console.log('child - beforeUpdate')
  },
  updated() {
    console.log('child - updated')
  },
  beforeDestroy() {
    console.log('child - beforeDestroy')
  },
  destroyed() {
    console.log('child - destroy')
  }
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
