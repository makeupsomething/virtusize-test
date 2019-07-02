import Vue from 'vue'
import Router from 'vue-router'

const UserSetup = () => import('@/views/UserSetup.vue')
const Signup = () => import('@/views/Signup.vue')
const Profile = () => import('@/views/Profile.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'user-setup',
            component: UserSetup,
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup,
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
        },
    ],
})
