<template>
  <div class="app-container">
    <default-layout @button="move">
<!--      <keep-alive>-->
        <router-view></router-view>
<!--      </keep-alive>-->
      <h2>{{ now }} page</h2>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/DefaultLayout';

export default {
  components: {
    DefaultLayout
  },
  created() {
    this.now = location.pathname.slice(1)
  },
  data() {
    return {
      now: 'first'
    }
  },
  methods: {
    move(currentBtn) {
      console.log('move move', currentBtn)
      this.now = currentBtn
      this.$router.push(`/${currentBtn}`).catch(err => err)
    }
  },

};
</script>

<style>
html, body {
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
}

.app-container {
  background-color: white;
}
</style>

// 요구사항 정의
// 0. default layout의 first/second/third 버튼을 누르면 각 페이지 이동
// 1.  first 페이지 : radio 버튼 (다른페이지에 갔다가 돌아와도 선택값 유지) watch를 이용해 선택값 추적
// 2. second 페이지 : 1-100까지 홀수면 odd 컴포넌트 짝수이면 even 컴포넌트로 렌더
// 3. third 페이지 : text

