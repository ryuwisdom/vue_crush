<template>
  <div>
    <div class="box" ref="boxSize">
      <h3>3page</h3>
    </div>
    <div class="box2" v-if="isShow" ref="box2"></div>
    <br>
    <button @click="click">getHeight</button>
    <button @click="click2">add div</button>
    <button @click="click3">show third div</button>
    <br>
    <br>
    <div ref="height">first box height: {{ height }}</div>
    <div ref="height2">second box height: {{ height2 }}</div>
    <div ref="height3">third box height: {{ height3 }}</div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      height: '뭘까요?',
      height2: '뭘까요?',
      height3: '뭘까요?',
      isShow: false,
    }
  },

  methods: {

    click() {
      // 클릭하는 순간 box의 height가 600px로 변경, 변경된 크기로 출력
      let box = this.$refs.boxSize
      box.style.height = '600px'
      this.$refs.height.innerText = `first box height: ${this.$refs.boxSize.clientHeight}px`
    },
    click2() {
      //boxSize div아래에 div추가하기
      let secondBox = document.createElement('div')
      secondBox.style.height = '100px'
      secondBox.style.width = '100px'
      secondBox.style.backgroundColor = 'pink'
      this.$refs.boxSize.appendChild(secondBox)
      this.$refs.height2.innerText = `second box height: ${secondBox.style.height}`
    },
    click3() {
      // click시 third박스가 보이고, 보여진 박스의 크기를 구해서 화면에 출력
      this.isShow = true
      this.$nextTick(() => {
        this.$refs.height3.innerText = `third box height: ${this.$refs.box2.clientHeight}px`
      })
    }
  },

}
</script>

<style scoped>

.box {
  width: 300px;
  height: 300px;
  background-color: royalblue;
}

.box2 {
  width: 100px;
  height: 100px;
  background-color: mediumspringgreen;
}


</style>
