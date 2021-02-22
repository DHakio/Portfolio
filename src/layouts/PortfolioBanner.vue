<template>
    <div id="banner" class="d-flex align-items-center py-5 justify-content-center flex-wrap">
                <div class="mx-5">
                    <Photo />
                </div>
                <div class="">
                    <h1 class="h1 text-center font-bold">DAMIEN MICHEL</h1>
                    <h2 class=" mb-0 text-center">DEVELOPPEUR WEB FULLSTACK</h2>
                </div>
    </div>
</template>

<style lang="scss" scoped>
    #banner {
        background-color: #26292e;
        color: #3e92a3;
    }
    h2 {
        font-size: 1rem;
        letter-spacing: 0.2rem;
        line-height: 1rem;
    }

</style>

<script lang="ts">
import Photo from '@/components/Photo.vue';

export default {
    components: {
        Photo
    }
}
</script>