<template>
<div>
    <PortfolioBanner />
    <PortfolioAbout />
    <PortfolioSkills />
    <PortfolioFormation />
    <PortfolioProjects />
    <PortfolioContact />
    <PortfolioFooter />
</div>
</template>

<style lang="scss" scoped>
    li {
        list-style: none;
        letter-spacing: 0.2rem;
        line-height: 2rem;
    }
    a {
        color: #494e5f;
    }
</style>

<script>
import PortfolioBanner from '@/layouts/PortfolioBanner.vue';
import PortfolioAbout from '@/layouts/PortfolioAbout.vue';
import PortfolioSkills from '@/layouts/PortfolioSkills.vue';
import PortfolioFormation from '@/layouts/PortfolioFormation.vue';
import PortfolioProjects from '@/layouts/PortfolioProjects.vue';
import PortfolioContact from '@/layouts/PortfolioContact.vue';
import PortfolioFooter from '@/layouts/PortfolioFooter.vue';

export default {
    components: {
        PortfolioBanner,
        PortfolioAbout,
        PortfolioSkills,
        PortfolioFormation,
        PortfolioProjects,
        PortfolioContact,
        PortfolioFooter
    }
}
</script>