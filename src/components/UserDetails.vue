<template>
    <div class="card__content card__content--profile">
        <img class="profile-picture" :src="imageUrl" />
        <div class="text text--name">
            {{ user.firstName }}
            {{ user.lastName }}
        </div>
        <div class="text text--email">
            {{ user.email }}
        </div>
        <router-link tag="button" :to="{name: 'edit'}" class="btn btn--green">
            Edit Details
        </router-link>
        <router-link
            tag="button"
            :to="{name: 'edit-password'}"
            class="btn btn--green"
        >
            Edit Password
        </router-link>
    </div>
</template>

<script>
import md5 from 'md5'

export default {
    name: 'UserDetails',

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
}
</script>
