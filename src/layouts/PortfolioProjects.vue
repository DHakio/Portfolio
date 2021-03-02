<template>
    <div id="projects" class="pt-5">
        <h2 class="text-center  mt-5 h1 px-2">MES PROJETS</h2>
        <p class="text-center h3 px-2">Voici quelques uns de mes projets réalisés</p>
        <ProjectCarousel />
    </div>
</template>

<style lang="scss" scoped>
    #projects {
        background-color: #2a2d33;
        color: white;
        h2 {
            color: #3e92a3;
            letter-spacing: 0.5rem;
        }
        h3 {
            color: #FF5335;
        }
    }
</style>

<script lang="ts">
import ProjectCarousel from '@/components/ProjectCarousel.vue';

export default {
    components: {
        ProjectCarousel,
    }
}
</script>