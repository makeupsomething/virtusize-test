<template>
    <section class="card">
        <h2>
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
}
</script>
