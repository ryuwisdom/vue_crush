<template>
  <div class="default-container">
    <header class="header-container">
      <router-link to="/">header</router-link>
      <div class="button-box">
        <button v-for="btn in buttons" :key="btn" @click="click(btn)">{{ btn }}</button>
      </div>
      <first-button :label="currentBtn"></first-button>
    </header>
    <main class="main-container">
      <slot></slot>
    </main>

    <footer class="footer-container">footer</footer>
  </div>
</template>

<script>
import FirstButton from '@/components/FirstButton.vue';
export default {
  components : {
    FirstButton
  },
  data() {
    return {
      currentBtn: 'first',
      buttons: ['first', 'second', 'third','fourth'],
    }
  },
  methods: {
    click(btn) {
      this.currentBtn = btn
      this.$emit('button', this.currentBtn)
    }
  },
}
</script>

<style>
.default-container {
  padding: 0;
  margin: 0;
  width: 100%;
}

.header-container {
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  padding: 10px;
  background-color: mistyrose;
}

.button-box {
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

button {
  width: 30%;
  height: 50px;
  font-size: 20px;
  outline: none;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 90%;
  margin: 0 auto;
  background-color: whitesmoke;
}

.footer-container {
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  padding: 10px;
  background-color: mintcream;
  margin-top: 100px;
}
</style>
