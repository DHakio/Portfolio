<template>
    <div  id="skills" class="col-md-12 py-5">
        <h2 class="text-center ">MES COMPETENCES</h2>
        <ul class="d-flex justify-content-center flex-wrap col-10 my-0 mx-auto px-5">
            <Skill img="html.png" label="HTML" />
            <Skill img="css.png" label="CSS" />
            <Skill img="js.png" label="JAVASCRIPT" />
            <Skill img="bootstrap.png" label="BOOTSTRAP" />
            <Skill img="angular.png" label="ANGULAR" />
            <Skill img="vuejs.png" label="VUEJS" />
            <Skill img="ts.png" label="TYPESCRIPT" />
            <Skill img="php.png" label="PHP" />
            <Skill img="nodejs.png" label="NODE.JS" />
            <Skill img="mysql.png" label="MYSQL" />
            <Skill img="mongodb.png" label="MONGODB" />
            <Skill img="sequelize.png" label="SEQUELIZE" />
            <Skill img="slim.png" label="SLIM FRAMEWORK" />
            <Skill img="github.png" label="Git" />
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    #skills {
        background-color: #3e92a3;
        color: white;
        h2 {
            letter-spacing: 0.5rem;
        }
    }
</style>

<script>
import Skill from '@/components/Skill.vue';

export default {
    components: {
        Skill,
    }
}
</script>