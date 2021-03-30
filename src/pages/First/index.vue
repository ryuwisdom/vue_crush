<template>
  <div class="component-container">
    <h3>1page</h3>
    <br>
    <div class="radio-box">
      <div><label for="Shen">Shen</label>&nbsp;<input type="radio" name="check" id="Shen" v-model="currentValue" value="Shen"></div>
      <div><label for="Harry">harry</label>&nbsp;<input type="radio" name="check" id="Harry" v-model="currentValue" value="Harry"></div>
      <div><label for="Simon">Simon</label>&nbsp;<input type="radio" name="check" id="Simon" v-model="currentValue" value="Simon"></div>
      <div><label for="Jeff">Jeff</label>&nbsp;<input type="radio" name="check" id="Jeff" v-model="currentValue" value="Jeff"></div>
      <div><label for="Song-i">Song-i</label>&nbsp;<input type="radio" name="check" id="Song-i" v-model="currentValue" value="Song-i"></div>
      <div><label for="Bonnie">Bonnie</label>&nbsp;<input type="radio" name="check" id="Bonnie" v-model="currentValue" value="Bonnie"></div>
    </div>
    <br>
      <h1>{{ currentValue }}</h1>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: ''
    }
  },
  watch: {
    currentValue() {
      console.log(this.currentValue)
    }
  }
}
</script>

<style>
.component-container {
  width: 100%;
  height: 50vh;
  border: 1px solid darkgrey;
  background-color: azure;
}

.radio-box {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
</style>
