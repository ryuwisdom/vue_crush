import Vue from 'vue'
import App from './App.vue'
// import StatusComponents from './Status'

Vue.config.productionTip = false
// Vue.component('AppStatus', StatusComponents )
new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
})

