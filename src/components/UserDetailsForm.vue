<template>
    <form action="" @submit.prevent="submit">
        <div v-if="editName">
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
        </div>
        <div v-if="editEmail">
            <label for="email">email</label>
            <input
                id="email"
                v-model="creds.email"
                placeholder="email"
                type="email"
                required
            />
        </div>
        <div v-if="editPassword">
            <label for="password">password</label>
            <input
                id="password"
                v-model="creds.password"
                :type="showPassword ? 'text' : 'password'"
                required
            />
            <button @click="toggleShowPassword">show password</button>
        </div>
        <input type="submit" />
    </form>
</template>

<script>
export default {
    name: 'UserDetailsForm',

    props: {
        editName: {
            type: Boolean,
            default: true,
        },
        editEmail: {
            type: Boolean,
            default: true,
        },
        editPassword: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return {
            creds: {
                firstName: null,
                lastName: null,
                email: null,
                password: null,
                showPassword: false,
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
        toggleShowPassword() {
            this.showPassword = !this.showPassword
        },
    },
}
</script>
