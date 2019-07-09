<template>
    <section class="card">
        <h2 data-testid="section-header">
            {{ $t("Let's get your details") }} ✍️
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
        //Check if the user has details saved in local storage,
        //if yes add to the store then redirect them to their profile page
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
