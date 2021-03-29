<template>
  <div class="app-container">
    <default-layout
        @button="changedButton"
        class="default-layout-container"
    >
      <router-view><p>{{ nowTab }}</p></router-view>

    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout';

let tab = 'FirstChild';

export default {
  components: {
    DefaultLayout,
  },
  data() {
    return {
      nowTab: 'first',
    }
  },
  computed: {
    childComponents() {
      if (this.nowTab === 'second') tab = 'SecondChild';
      if (this.nowTab === 'third') tab = 'ThirdChild';
      return tab;
    },
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

.default-layout-container {
  /*width: 100%;*/
  display: flex;
  flex-direction: column;

}
</style>
