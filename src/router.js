import Vue from 'vue'
import Router from 'vue-router'
import UserSetup from './views/UserSetup.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'user-setup',
            component: UserSetup,
        },
    ],
})
