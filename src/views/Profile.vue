<template>
    <section v-if="user" class="card">
        <h2>{{ headerText }}</h2>
        <transition name="slide-left" mode="out-in">
            <router-view>
                <router-link
                    tag="button"
                    :to="{name: 'profile-details'}"
                    class="btn btn--red"
                >
                    Cancel
                </router-link>
            </router-view>
        </transition>
    </section>
</template>

<script>
export default {
    name: 'Profile',

    computed: {
        user() {
            return this.$store.state.user
        },
        headerText() {
            switch (this.$route.name) {
                case 'edit-name':
                    return 'Edit Name'
                    break
                case 'edit-email':
                    return 'Edit Email'
                    break
                case 'edit-password':
                    return 'Edit Password'
                    break
                default:
                    return 'User profile'
            }
        },
    },

    created() {
        if (localStorage.getItem('userDetails')) {
            this.$store.commit(
                'setUser',
                JSON.parse(localStorage.getItem('userDetails')),
            )
        } else {
            this.$router.push({name: 'user-setup'})
        }
    },
}
</script>
