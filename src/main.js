import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import vuexStore from '@/store'
import Vuex from 'vuex'

Vue.use(Vuex)
import '@/assets/styles/css/main.css'

Vue.config.productionTip = false

let store = new Vuex.Store(vuexStore)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
