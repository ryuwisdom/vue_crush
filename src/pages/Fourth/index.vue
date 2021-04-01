<template>
  <div class="fourth">
    <h2>Vuex</h2>
    <!-- getter 쓰기전 -->
    <!--    mom counter : {{this.$store.state.counter}}-->
    <!--  getter 사용 -->
    <div>mom counter : {{ getCounter }}</div>
    <div>mom double counter : {{ doubleCounter }}</div>
    <br>
    <br>
    <button @click="addCounter">plus</button>
    <button @click="subCounter">minus</button>
    <br>
    <div class="container">
      <div>child counter : {{ getCounter }}</div>
      <div>child double counter : {{ doubleCounter }}</div>
    </div>
<!--    <fourth-child>-->
      <!--      <div>child counter : {{ this.$store.state.counter }}</div>-->
<!--    </fourth-child>-->

  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
// import FourthChild from '@/pages/Fourth/FourthChild';

export default {
  // components: {FourthChild},
  created() {
    console.log(this.$store)
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    ...mapMutations([
      'addCounter', 'subCounter',
    ]),
    ...mapActions([
      'asyncCounter'
    ]),
    changeButtonstate() {
      // this.$store.commit('setButtonState', {newButtonState: 'normal'})
      // this.$store.commit('setButtonState', {newButtonState: 'hover'})
      // this.$store.commit('setButtonState', {newButtonState: 'clicked'})
    },
    // addCounter() {
    // this.$store.state.counter++;

    // commit사용하여 store의 mutations에서 호출
    // this.$store.commit('addCounter')
    // },
    // subCounter() {
    // this.$store.state.counter--;
    // this.$store.commit('subCounter')
    // },


  },
  computed: {
    ...mapGetters([ 'getCounter'

    ]),
    doubleCounter() {
      return this.$store.getters.doubleCounter;
    },

  },
}
</script>


<style>
.fourth {
  width: 100%;
  height: 500px;
  border: 1px solid crimson;
}

button {
  width: 80px;
  font-size: 20px;
}
.container {
  height: 50px;
  background-color: royalblue;
}
</style>
