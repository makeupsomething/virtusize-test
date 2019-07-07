<template>
    <form action="" class="form" @submit.prevent="submit">
        <div
            v-if="
                this.$route.name === 'edit-name' ||
                    this.$route.name === 'signup'
            "
            class="form__group form__group--two"
        >
            <div class="form__group">
                <label for="firstName" class="form__label">First Name</label>
                <input
                    id="firstName"
                    v-model="firstName"
                    class="form__input"
                    placeholder="First Name"
                    required
                    type="text"
                />
            </div>
            <div class="form__group">
                <label for="lastName" class="form__label">Last Name</label>
                <input
                    id="lastName"
                    v-model="lastName"
                    class="form__input"
                    placeholder="Last Name"
                    required
                    type="text"
                />
            </div>
        </div>
        <div
            v-if="
                this.$route.name === 'edit-email' ||
                    this.$route.name === 'signup'
            "
            class="form__group"
        >
            <label class="form__label" for="email">Email</label>
            <input
                id="email"
                v-model="email"
                class="form__input"
                placeholder="email"
                type="email"
                required
            />
        </div>
        <div
            v-if="
                this.$route.name === 'edit-password' ||
                    this.$route.name === 'signup'
            "
            class="form__group"
        >
            <label class="form__label" for="password">Password</label>
            <input
                id="password"
                v-model="password"
                placeholder="Password"
                class="form__input"
                :type="showPassword ? 'text' : 'password'"
                required
            />
            <meter
                id="password-strength-meter"
                :value="passwordStrength"
                max="4"
            ></meter>
            <span id="password-strength-text">
                {{ strengthText[passwordStrength] }}
            </span>
        </div>
        <div
            v-if="
                this.$route.name === 'edit-password' ||
                    this.$route.name === 'signup'
            "
            class="form__group--buttons"
        >
            <button class="btn" @click.prevent="toggleShowPassword">
                <span v-if="!showPassword">
                    <i class="fa fa-eye" />
                    Show Password
                </span>
                <span v-else>
                    <i class="fa fa-eye-slash" />
                    Hide Password
                </span>
            </button>
        </div>
        <input type="submit" class="btn btn--green" />
        <slot />
    </form>
</template>

<script>
import zxcvbn from 'zxcvbn'

export default {
    name: 'UserDetailsForm',

    data() {
        return {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            strengthText: {
                0: 'Worst',
                1: 'Bad',
                2: 'Weak',
                3: 'Good',
                4: 'Strong',
            },
            showPassword: false,
        }
    },

    computed: {
        passwordStrength() {
            if (this.password) {
                return zxcvbn(this.password).score
            }
            return null
        },
        user() {
            return this.$store.state.user
        },
    },

    created() {
        if (this.user) {
            this.firstName = this.user.firstName
            this.lastName = this.user.lastName
            this.email = this.user.email
        }
    },

    methods: {
        submit() {
            this.$store.commit('setUser', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
            })
            localStorage.setItem(
                'userDetails',
                JSON.stringify({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                }),
            )
            this.$router.push({name: 'profile-details'})
        },
        toggleShowPassword() {
            this.showPassword = !this.showPassword
        },
    },
}
</script>
