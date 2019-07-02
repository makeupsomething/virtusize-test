<template>
    <section>
        User profile
        <div v-if="user">
            <img :src="imageUrl" />
            {{ user }}
            {{ imageHash }}
        </div>
    </section>
</template>

<script>
import md5 from 'md5'
export default {
    name: 'Profile',

    computed: {
        user() {
            return this.$store.state.user
        },
        imageUrl() {
            if (this.user && this.user.email) {
                return `https://www.gravatar.com/avatar/${md5(this.user.email)}`
            }
            return null
        },
    },
}
</script>
