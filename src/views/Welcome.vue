<template>
    <section class="card">
        <h2>Welcome!</h2>
        <div class="card__content--welcome">
            <div>
                <span class="text">
                    It looks like you don't have an account yet 😢
                </span>
                <span class="text">
                    Let's get you set up!
                </span>
            </div>
            <router-link
                tag="button"
                :to="{name: 'signup'}"
                class="btn btn--green"
            >
                get started!
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Welcome',
}
</script>
