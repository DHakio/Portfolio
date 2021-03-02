<template>
    <li class="skill col-lg-1 col-4 my-2">
        <img :src="require(`@/assets/images/skills/${img}`)" :alt="label" class="img-fluid">
    </li>
</template>

<style lang="scss">
    .skill {
        list-style: none;
        img {
            opacity: 0.6;
            max-height: 5rem;
            &:hover {
                opacity: 1;
            }
        }
    }

</style>

<script lang="ts">
export default {
    name: 'Skill',
    props: ['img', 'label']
}
</script>