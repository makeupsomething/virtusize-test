<template>
    <div>
        <div class="header">
            <h1>My Profile!</h1>
            <LocaleSwitcher />
        </div>
        <main>
            <transition name="slide-left" mode="out-in">
                <router-view />
            </transition>
        </main>
    </div>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher'

export default {
    name: 'App',

    components: {
        LocaleSwitcher,
    },
}
</script>
