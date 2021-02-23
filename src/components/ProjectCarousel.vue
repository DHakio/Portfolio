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
                <img
                class="d-block w-100 mx-auto"
                src="../assets/images/projects/portfolio.png"
                alt="image slot"
                >
            </template>
        </b-carousel-slide>
        <b-carousel-slide>
            <template #img>
                <img
                class="d-block w-100 mx-auto"
                src="../assets/images/projects/groupomania.png"
                alt="image slot"
                >
            </template>
        </b-carousel-slide>
        <b-carousel-slide>
            <template #img>
                <img
                class="d-block w-100 mx-auto"
                src="../assets/images/projects/omf.png"
                alt="image slot"
                >
            </template>
        </b-carousel-slide>
        <b-carousel-slide>
            <template #img>
                <img
                class="d-block w-100 mx-auto"
                src="../assets/images/projects/reservia.png"
                alt="image slot"
                >
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
  export default {
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
