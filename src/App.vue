<template>
    <div>
        <div class="header">
            <h1>My Profile!</h1>
        </div>
        <main>
            <transition name="slide-left" mode="out-in">
                <router-view />
            </transition>
        </main>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>
