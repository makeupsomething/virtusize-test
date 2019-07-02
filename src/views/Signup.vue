<template>
    <section>
        <form action="" @submit.prevent="submit">
            <label for="first">first name</label>
            <input
                id="first"
                v-model="creds.firstName"
                placeholder="Test"
                type="text"
            />
            <label for="last">last name</label>
            <input
                id="last"
                v-model="creds.lastName"
                placeholder="User"
                type="text"
            />
            <label for="email">email</label>
            <input
                id="email"
                v-model="creds.email"
                placeholder="email"
                type="email"
                required
            />
            <label for="password">password</label>
            <input
                id="password"
                v-model="creds.password"
                type="password"
                required
            />
            <input type="submit" />
        </form>
    </section>
</template>

<script>
export default {
    name: 'Signup',

    data() {
        return {
            creds: {
                firstName: null,
                lastName: null,
                email: null,
                password: null,
            },
        }
    },

    methods: {
        submit() {
            this.$store.commit('setUser', {
                firstName: this.creds.firstName,
                lastName: this.creds.lastName,
                email: this.creds.email,
            })
            this.$router.push({name: 'profile'})
        },
    },
}
</script>
