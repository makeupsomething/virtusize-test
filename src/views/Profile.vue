<template>
    <section v-if="user" class="card">
        <h2>User profile</h2>
        <div v-if="!editing" class="card__content card__content--profile">
            <img class="profile-picture" :src="imageUrl" />
            <div class="text text--name">
                {{ user.firstName }}
                {{ user.lastName }}
            </div>
            <div class="text text--email">
                {{ user.email }}
            </div>
            <button class="btn btn--green" @click="toggleEdit">
                Edit Details
            </button>
        </div>
        <UserDetailsForm v-else>
            <button class="btn btn--red" @click="toggleEdit">
                Cancel
            </button>
        </UserDetailsForm>
    </section>
</template>

<script>
import md5 from 'md5'
import UserDetailsForm from '@/components/UserDetailsForm'

export default {
    name: 'Profile',

    components: {
        UserDetailsForm,
    },

    data() {
        return {
            editing: false,
        }
    },

    computed: {
        user() {
            return this.$store.state.user
        },
        imageUrl() {
            if (this.user && this.user.email) {
                return `https://www.gravatar.com/avatar/${md5(this.user.email)}`
            }
            return null
        },
    },

    methods: {
        toggleEdit(test) {
            this.editing = !this.editing
        },
    },
}
</script>
