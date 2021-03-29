<template>
  <div class="app-container">
    <default-layout
        class="default-layout-container"
        @button="changedButton"
    >
      {{ nowTab }}
      <router-view></router-view>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout';


export default {
  components: {
    DefaultLayout,
  },
  data() {
    return {
      nowTab: 'first',
    }
  },
  created(currentTab) {
   console.log('+_+')
    this.nowTab = currentTab
    },

  methods: {
    changedButton(currentTab) {
      this.nowTab = currentTab
      this.$router.push(`/${this.nowTab}`)
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.app-container {
  background-color: white;
}
</style>
