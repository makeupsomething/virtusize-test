import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from '@/router'
import vuexStore from '@/store'
import Vuei18n from 'vue-i18n'
import ja from '@/translations/ja'
import '@/assets/styles/css/main.css'

Vue.use(Vuex)
Vue.use(Vuei18n)

let store = new Vuex.Store(vuexStore)

const i18n = new Vuei18n({
    locale: 'en',
    messages: {
        ja,
    },
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app')
