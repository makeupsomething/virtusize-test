<template>
    <section>
        User profile
        <div v-if="user">
            <img :src="imageUrl" />
            <div v-if="!editName" class="user-name">
                {{ user.firstName }}
                {{ user.lastName }}
                <button @click="toggleEdit">edit name</button>
            </div>
            <div v-else>
                <UserDetailsForm
                    :edit-name="editName"
                    :edit-email="false"
                    :edit-password="false"
                />
            </div>
            <div v-if="!editEmail" class="user-email">
                {{ user.email }}
                <button @click="toggleEdit">edit email</button>
            </div>
            <div v-else>
                <UserDetailsForm
                    :edit-name="false"
                    :edit-email="editEmail"
                    :edit-password="false"
                />
            </div>
            <div v-if="!editPassword" class="user-password">
                {{ user.password }}
                <button @click="toggleEdit">edit password</button>
            </div>
            <div v-else>
                <UserDetailsForm
                    :edit-name="false"
                    :edit-email="false"
                    :edit-password="editPassword"
                />
            </div>
        </div>
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
            editName: false,
            editEmail: false,
            editPassword: false,
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
        toggleEdit() {
            console.log('sdfdsf')
        },
    },
}
</script>
