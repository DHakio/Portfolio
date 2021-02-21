<template>
    <div id="app">
        <PortfolioHeader/>
        <PortfolioBody/>
    </div>
</template>

<style lang="scss">
    @font-face {
        font-family: "Montserrat bold";
        src: url("./assets/fonts/Montserrat-Bold.ttf");
    }
    @font-face {
        font-family: "Montserrat classic";
        src: url('./assets/fonts/Montserrat-Regular.ttf')
    }
    #app {
        font-family: "Montserrat bold";
    }
    .font-thin {
        font-family: "Montserrat classic";
    }
    .title {
        background-color: #ffe7d4;
        color: #494e5f;
    }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PortfolioHeader from '@/layouts/PortfolioHeader.vue';
import PortfolioBody from '@/layouts/PortfolioBody.vue';

@Component({
  components: {
    PortfolioHeader,
    PortfolioBody
  },
})
export default class App extends Vue {}
</script>