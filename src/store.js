import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        counter: 0,
        buttonStateCurrent: 'normal'
    },
    // mutation : state값 변경
    // Vuex의 데이터, state값을 변경하는 로직, 인자를 받아 vuex로 넘겨줄 수 있고,
    // computed가 아닌 methods에 등록
    // 동기적 로직 정의 (mutations안에 정의한 로직들이 순차적으로 일어나야 각 컴포넌트의 반영 여부를 제대로 추적할 수 있다.)
    // state관리에 중점
    mutations: {
        addCounter: function (state) {
            return state.counter++
        },
        subCounter: function (state) {
            return state.counter--
        },

        // setButtonState: function (state, payload) {
        // }

        setButtonState (state, { newButtonState }) {
            if (!['normal', 'hover', 'clicked'].includes(newButtonState)) {
                return
            }
            switch (newButtonState) {
                case 'normal':
                case 'hover':
                case 'clicked':
            }
            state.buttonStateCurrent = newButtonState
        },
    },

    // getter : state값에 쉽게 접근할 수 있는 기능
    // 각 컴포넌트에서 vuex데이터를 접근할 때 중복된 코드 호출을 방지
    // vuex의 데이터변경을 각 컴포넌트에서 하는 것이 아니고 vuex에서 수행하고 각 컴포넌트에서 수행로직 호출 -> 가독성,성능 개선
    // computed 같은
    getters: {
        getCounter(state){
            return state.counter
        },
        doubleCounter(state){
            return state.counter * 2
        },
    },
    // actions : 비동기 처리 로직 선언 (ex) setTimeout or 서버 통신 로직
    // 동기적 로직은 mutations에서 구현
    actions: {
        // addCounter은 commit의 대상은 mutations의 메서드를 의미 / 상태변화 추적을 위
        addCounter : function (context){
            console.log('action!')
            // return context.commit('addCounter')
            return context.dispatch('addCounter')
        },

        asyncCounter(context) {
            return setTimeout(function () {
                context.commit('addCounter')
            }, 1000)
        }
    }
})

export default store
