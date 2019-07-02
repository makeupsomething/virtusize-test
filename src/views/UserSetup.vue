<template>
    <section>
        <div>
            It looks like you do not have an account yet
        </div>
        <div>
            Let's get you set up!
        </div>
        <router-link :to="{name: 'signup'}">get started!</router-link>
    </section>
</template>

<script>
export default {
    name: 'UserSetup',
}
</script>
