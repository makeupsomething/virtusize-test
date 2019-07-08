<template>
    <div class="card__content card__content--profile">
        <img class="profile-picture" :src="imageUrl" />
        <div id="user-name" class="user-details">
            <div class="text text--name">
                <span title="user-name">
                    {{ user.firstName }} {{ user.lastName }}
                </span>
            </div>
            <router-link
                tag="button"
                aria-label="edit name"
                :to="{name: 'edit-name'}"
                class="btn btn--green"
            >
                <i class="fa fa-edit" />
            </router-link>
        </div>
        <div id="user-email" class="user-details">
            <div class="text text--email">
                <span title="email">{{ user.email }}</span>
            </div>
            <router-link
                tag="button"
                aria-label="edit email"
                :to="{name: 'edit-email'}"
                class="btn btn--green"
            >
                <i class="fa fa-edit" />
            </router-link>
        </div>
        <div class="user-details">
            <div class="text text--email">
                Password Set <i class="fa fa-lock" />
            </div>
            <router-link
                tag="button"
                aria-label="edit password"
                :to="{name: 'edit-password'}"
                class="btn btn--green"
            >
                <i class="fa fa-edit" />
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
