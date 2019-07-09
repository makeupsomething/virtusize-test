<template>
    <section class="card">
        <h2 data-testid="section-header">{{ $t('Welcome!') }}</h2>
        <div class="card__content--welcome">
            <div>
                <span class="text">
                    {{ $t("It looks like you don't have an account yet") }} 😢
                </span>
                <span class="text">
                    {{ $t("Let's get you set up!") }}
                </span>
            </div>
            <router-link
                tag="button"
                :to="{name: 'signup'}"
                class="btn btn--green"
            >
                {{ $t('get started!') }}
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Welcome',

    created() {
        //Check if the user has details saved in local storage,
        //if yes add to the store then redirect them to their profile page
        if (localStorage.getItem('userDetails')) {
            this.$store.commit(
                'setUser',
                JSON.parse(localStorage.getItem('userDetails')),
            )
            this.$router.push({name: 'profile-details'})
        }
    },
}
</script>
