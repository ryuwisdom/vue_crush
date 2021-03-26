<template>
  <div class="app-container">
    <default-layout></default-layout>
    <first-child></first-child>
    <second-child></second-child>
    <third-child></third-child>
  </div>
</template>

<script>
import DefaultLayout from "@/layout/DefaultLayout";
import FirstChild from "@/components/FirstChild";
import SecondChild from "@/components/SecondChild";
import ThirdChild from "@/components/ThirdChild";

export default {
  components: {
    DefaultLayout,
    FirstChild,
    SecondChild,
    ThirdChild
  },
  computed: {
    childComponents() {
      let tab = 'FirstChild'
      if (this.currentTab === 2) tab = 'SecondChild'
      if (this.currentTab === 3) tab = 'ThirdChild'
      return tab
    }
  },
}

</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.app-container {
  background-color: mistyrose;
}
</style>


// 요구사항

// 부모컴포넌트는 app.vue
// 0. default layout에서 first, second, third component 제어
// 1. header의 버튼 클릭에 대한 변경사항 부모컴포넌트에 알려줌
// 2. 부모컴포넌트는 위 변경사항에 대한 결과를 받아 렌더(클릭했을때 각 first, second, third component 렌더)


