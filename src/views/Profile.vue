<template>
    <section v-if="user" class="card">
        <h2>User profile</h2>
        <router-view>
            <router-link
                tag="button"
                :to="{name: 'profile-details'}"
                class="btn btn--red"
            >
                Cancel
            </router-link>
        </router-view>
    </section>
</template>

<script>
export default {
    name: 'Profile',

    computed: {
        user() {
            return this.$store.state.user
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
