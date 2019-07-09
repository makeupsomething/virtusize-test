<template>
    <div>
        <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                {{ lang }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'LocaleSwitcher',
    data() {
        return {langs: ['en', 'ja']}
    },
}
</script>
