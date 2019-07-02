<template>
    <section>
        User profile
        <div v-if="user">
            {{ user }}
        </div>
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
}
</script>
