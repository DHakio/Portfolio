<template>
    <li class="font-thin">
        <img :src="require(`@/assets/images/${img}`)" :alt="label">
        {{ label }}
    </li>
</template>

<style lang="scss">
    img {
        height: 1.5rem;
    }
</style>

<script lang="ts">
export default {
    name: 'Competence',
    props: ['img', 'label']
}
</script>