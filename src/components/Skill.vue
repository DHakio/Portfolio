<template>
    <li class=" skill">
        <img :src="require(`@/assets/images/skills/${img}`)" :alt="label" class="m-4">
    </li>
</template>

<style lang="scss">
    .skill {
        list-style: none;
        img {
            height: 5rem;
            opacity: 0.6;
            &:hover {
                opacity: 1;
            }
        }
    }

</style>

<script lang="ts">
export default {
    name: 'Competence',
    props: ['img', 'label']
}
</script>