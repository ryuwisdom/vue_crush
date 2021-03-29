<template>
  <div class="app-container">
    <default-layout
        @button="changedButton">
      <component :is="childComponents">
        <p>{{nowTab}}</p>
      </component>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout';
import FirstChild from './components/FirstChild.vue';

let tab = 'FirstChild';

export default {
  components: {
    DefaultLayout,
    FirstChild,
    SecondChild: () => import('@/components/SecondChild'),
    ThirdChild: () => import('@/components/ThirdChild'),
  },
  data() {
    return {
      nowTab: 1,
    }
  },
  computed: {
    childComponents() {
      if (this.nowTab === 2) tab = 'SecondChild';
      if (this.nowTab === 3) tab = 'ThirdChild';
      return tab;
    },
  },
  methods: {
    changedButton(currentTab) {
      this.nowTab = currentTab
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
