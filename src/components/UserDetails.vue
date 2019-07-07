<template>
    <div class="card__content card__content--profile">
        <img class="profile-picture" :src="imageUrl" />
        <div class="user-details">
            <div class="text text--name">
                {{ user.firstName }}
                {{ user.lastName }}
            </div>
            <router-link
                tag="button"
                :to="{name: 'edit-name'}"
                class="btn btn--green"
            >
                <i class="fa fa-edit" />
            </router-link>
        </div>
        <div class="user-details">
            <div class="text text--email">
                {{ user.email }}
            </div>
            <router-link
                tag="button"
                :to="{name: 'edit-email'}"
                class="btn btn--green"
            >
                <i class="fa fa-edit" />
            </router-link>
        </div>
        <div class="user-details">
            <router-link
                tag="button"
                :to="{name: 'edit-password'}"
                class="btn btn--green"
            >
                Edit Password
            </router-link>
        </div>
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
