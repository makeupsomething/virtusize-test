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
            <button @click.prevent="toggleShowPassword">show password</button>
            <button @click.prevent="creds.password = null">clear</button>
            <span>{{ passwordStrength }}</span>
        </div>
        <slot />
        <input type="submit" />
    </form>
</template>

<script>
import zxcvbn from 'zxcvbn'

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
            },
            passwordIndicator: {
                0: '😭',
                1: '😕',
                2: '😐',
                3: '🙂',
                4: '😃',
            },
            showPassword: false,
        }
    },

    computed: {
        passwordStrength() {
            if (this.creds.password) {
                console.log(zxcvbn(this.creds.password))
                return this.passwordIndicator[zxcvbn(this.creds.password).score]
            }
            return null
        },
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
