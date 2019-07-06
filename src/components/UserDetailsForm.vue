<template>
    <form action="" class="form" @submit.prevent="submit">
        <div v-if="editName" class="form__group--two">
            <div class="form__group">
                <label for="first" class="form__label">First Name</label>
                <input
                    id="first"
                    v-model="creds.firstName"
                    class="form__input"
                    placeholder="First Name"
                    required
                    type="text"
                />
            </div>
            <div v-if="editName" class="form__group">
                <label for="last" class="form__label">Last Name</label>
                <input
                    id="last"
                    v-model="creds.lastName"
                    class="form__input"
                    placeholder="Last Name"
                    required
                    type="text"
                />
            </div>
        </div>
        <div v-if="editEmail" class="form__group">
            <label class="form__label" for="email">Email</label>
            <input
                id="email"
                v-model="creds.email"
                class="form__input"
                placeholder="email"
                type="email"
                required
            />
        </div>
        <div v-if="editPassword" class="form__group--two">
            <div class="form__group">
                <label class="form__label" for="password">Password</label>
                <input
                    id="password"
                    v-model="creds.password"
                    placeholder="Password"
                    class="form__input"
                    :type="showPassword ? 'text' : 'password'"
                    required
                />
            </div>
            <button class="btn btn--icon" @click.prevent="toggleShowPassword">
                <i v-if="showPassword" class="fa fa-eye" />
                <i v-else class="fa fa-eye-slash" />
            </button>
            <!-- <button @click.prevent="toggleShowPassword">
                s
            </button> -->
            <!-- <span>{{ passwordStrength }}</span> -->
            <!-- <button class="btn" @click.prevent="creds.password = null">
                clear
            </button> -->
        </div>
        <div cass="form__group--buttons">
            <input type="submit" class="btn btn--green" />
            <slot />
        </div>
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
