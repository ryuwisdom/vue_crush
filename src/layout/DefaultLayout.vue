<template>
  <div class="app-container">
    <header class="header">
      <div class="button-container">
        <button
            class="btn"
            v-for="btn in tabButtons"
            :key="btn"
            @click="click(btn)"
        >
          {{ btn }}
        </button>
      </div>
    </header>
    <div class="main-container">
      <slot></slot>
    </div>
    <footer class="footer">footer</footer>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentTab: 'first',
      tabButtons: ['first', 'second', 'third'],
    };
  },
  methods: {
    click(btn) {
      this.currentTab = btn;
      this.$emit('button', this.currentTab);
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
  background-color: mistyrose;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.btn {
  width: 100px;
  height: 40px;
}

.main-container {
  padding-top: 24px;
  height: 100vh;
  width: 90%;
  background-color: mintcream;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.header {
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: salmon;
}

.footer {
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  background-color: wheat;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

