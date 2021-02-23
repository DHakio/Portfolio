<template>
    <div>
        <b-img src="img" fluid alt="Fluid image"></b-img>
        test
    </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
export default {
    name: 'ProjectPreview',
    props: ['title', 'techs', 'img']
}
</script>