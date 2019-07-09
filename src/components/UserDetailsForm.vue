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
                <label for="firstName" class="form__label">{{
                    $t('First Name')
                }}</label>
                <input
                    id="firstName"
                    v-model="firstName"
                    class="form__input"
                    :placeholder="$t('First Name')"
                    required
                    type="text"
                />
            </div>
            <div class="form__group">
                <label for="lastName" class="form__label">{{
                    $t('Last Name')
                }}</label>
                <input
                    id="lastName"
                    v-model="lastName"
                    class="form__input"
                    :placeholder="$t('Last Name')"
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
            <label class="form__label" for="email">{{ $t('Email') }}</label>
            <input
                id="email"
                v-model="email"
                class="form__input"
                :placeholder="$t('Email')"
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
            <label class="form__label" for="password">{{
                $t('Password')
            }}</label>
            <input
                id="password"
                v-model="password"
                :placeholder="$t('Password')"
                class="form__input"
                :type="showPassword ? 'text' : 'password'"
                minlength="6"
                required
            />
            <meter
                id="password-strength-meter"
                :value="passwordStrength"
                max="4"
            ></meter>
            <span
                id="password-strength-text"
                data-testid="password-strength-text"
                aria-live="polite"
            >
                {{ $t(strengthText[passwordStrength]) }}
            </span>
        </div>
        <div
            v-if="
                this.$route.name === 'edit-password' ||
                    this.$route.name === 'signup'
            "
            class="form__group--toggle"
        >
            <button
                class="btn btn--secondary"
                @click.prevent="toggleShowPassword"
            >
                <span v-if="!showPassword">
                    <i class="fa fa-eye" />
                    {{ $t('Show Password') }}
                </span>
                <span v-else>
                    <i class="fa fa-eye-slash" />
                    {{ $t('Hide Password') }}
                </span>
            </button>
        </div>
        <div class="form__group--buttons">
            <input type="submit" class="btn btn--green" :value="$t('Submit')" />
            <slot />
        </div>
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
        // If there are user details in the store then we prefill the inputs with current value
        if (this.user) {
            this.firstName = this.user.firstName
            this.lastName = this.user.lastName
            this.email = this.user.email
        }
    },

    methods: {
        submit() {
            // Add the users details to the store and also save them to localhost
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
            // Update weather the password should be masked or not
            this.showPassword = !this.showPassword
        },
    },
}
</script>
