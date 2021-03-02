<template>
    <b-carousel
        id="carousel"
        v-model="slide"
        :interval="5000"
        controls
        indicators
        background="#2a2d33"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        class="mt-5"
    >
        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
            <template #img>
                <img class="d-block w-100 mx-auto" src="../assets/images/projects/portfolio.png" alt="image slot">
                <div class="carousel-caption d-flex justify-content-center align-items-center">
                  <Skill img="vuejs.png" label="VUEJS" />
                  <Skill img="bootstrap.png" label="BOOTSTRAP" />
                </div>
            </template>
        </b-carousel-slide>
        <b-carousel-slide>
            <template #img>
                <img class="d-block w-100 mx-auto" src="../assets/images/projects/groupomania.png" alt="image slot">
                <div class="carousel-caption d-flex justify-content-center align-items-center">
                  <Skill img="angular.png" label="ANGULAR" />
                  <Skill img="nodejs.png" label="NODE.JS" />
                  <Skill img="mysql.png" label="MYSQL" />
                </div>
            </template>
        </b-carousel-slide>
        <b-carousel-slide>
            <template #img>
                <img class="d-block w-100 mx-auto" src="../assets/images/projects/omf.png" alt="image slot">
                <div class="carousel-caption d-flex justify-content-center align-items-center">
                  <Skill img="html.png" label="html" />
                  <Skill img="sass.png" label="sass.JS" />
                </div>
            </template>
        </b-carousel-slide>
        <b-carousel-slide>
            <template #img>
                <img class="d-block w-100 mx-auto" src="../assets/images/projects/reservia.png" alt="image slot">
                <div class="carousel-caption d-flex justify-content-center align-items-center">
                  <Skill img="html.png" label="html" />
                  <Skill img="css.png" label="css.JS" />
                </div>
            </template>
        </b-carousel-slide>
    </b-carousel>
</template>

<style lang="scss" scoped>
    #carousel {
        img {
            filter: brightness(80%)
        }
    }

</style>

<script>
import Skill from '@/components/Skill.vue';

  export default {
    components: {
      Skill
    },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
