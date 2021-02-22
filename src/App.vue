<template>
    <div id="app">
        <PortfolioHeader/>
        <router-view/>
    </div>
</template>

<style lang="scss">
    html {
        scroll-behavior: smooth;
    }
    @font-face {
        font-family: "Montserrat bold";
        src: url("./assets/fonts/Montserrat-Bold.ttf");
    }
    @font-face {
        font-family: "Montserrat classic";
        src: url('./assets/fonts/Montserrat-Regular.ttf')
    }
    #app {
        font-family: "Montserrat classic";

        .font-bold {
            font-family: "Montserrat bold";
        }
        .title {
            background-color: #ffe7d4;
            color: #494e5f;
        }
        a {
            color: inherit;
        }
    }

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PortfolioHeader from '@/layouts/PortfolioHeader.vue';

@Component({
  components: {
    PortfolioHeader
  },
})
export default class App extends Vue {}
</script>