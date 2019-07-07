import Vue from 'vue'
import Router from 'vue-router'

const Welcome = () => import('@/views/Welcome.vue')
const Signup = () => import('@/views/Signup.vue')
const Profile = () => import('@/views/Profile.vue')
const UserDetails = () => import('@/components/UserDetails')
const UserDetailsForm = () => import('@/components/UserDetailsForm')

Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'user-setup',
            component: Welcome,
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
            children: [
                {
                    name: 'profile-details',
                    path: '/',
                    component: UserDetails,
                },
                {
                    name: 'edit',
                    path: 'edit',
                    component: UserDetailsForm,
                },
                {
                    name: 'edit-password',
                    path: 'edit/password',
                    component: UserDetailsForm,
                },
            ],
        },
    ],
})
