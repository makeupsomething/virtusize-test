<template>
    <section class="card">
        <h2 data-testid="section-header">
            Let's get your details ✍️
        </h2>
        <UserDetailsForm />
    </section>
</template>

<script>
import UserDetailsForm from '@/components/UserDetailsForm'

export default {
    name: 'Signup',

    components: {
        UserDetailsForm,
    },

    created() {
        if (localStorage.getItem('userDetails')) {
            this.$store.commit(
                'setUser',
                JSON.parse(localStorage.getItem('userDetails')),
            )
            this.$router.push({name: 'profile-details'})
        }
    },
}
</script>
