<template>
    <div id="infos" class="d-flex flex-wrap pt-5">
        <div class="col-12 py-2 my-3 title d-flex justify-content-center align-items-center shadow-sm">
            <i class="fas fa-info-circle"></i>
            <h3 class="h6 my-0 mx-3">INFORMATION PERSONNELLES</h3>
        </div>

        <p class="col-6">Nom : <span class="font-thin">MICHEL</span></p>
        <p class="col-6">Prénom : <span class="font-thin">Damien</span></p>
        <p class="col-6">Age : <span class="font-thin">29 ans</span></p>
        <p class="col-6">Région : <span class="font-thin">Île-de-France</span></p>
        <p class="text-center small font-thin col-12">Passionné de programmation depuis une quinzaine d'année, je me suis spécialisé dans le developpement d'applications web.</p>

        <div class="col-12 py-2 my-3 title d-flex justify-content-center align-items-center shadow-sm">
            <i class="fas fa-user-graduate"></i>
            <h3 class="h6 my-0 mx-3">FORMATION</h3>
        </div>

        <p class="col-12 text-center mt-4">
            <a href="https://openclassrooms.com/fr/paths/185-developpeur-web">Développeur Web - OpenClassrooms <br>
                <small class="col-12 text-center font-thin">Titre enregistré au Répertoire National des Certifications Professionnelles (RNCP) de niveau 5 (Bac +2)</small>
            </a>
        </p>

        <div class="col-md-6 col-sm-11 my-3"> 
            <div class="col-12 py-2 my-3 title d-flex justify-content-center align-items-center shadow-sm">
                <i class="fas fa-magic"></i>
                <h3 class="h6 my-0 mx-3">FRONT END</h3>
            </div>
            <ul class="d-flex flex-column align-items-center p-0">
                <Competence img="html.png" label="HTML" />
                <Competence img="css.png" label="CSS" />
                <Competence img="js.png" label="JAVASCRIPT" />
                <Competence img="bootstrap.png" label="BOOTSTRAP" />
                <Competence img="angular.png" label="ANGULAR" />
                <Competence img="vuejs.png" label="VUEJS" />
            </ul>   
        </div>

        <div class="col-md-6 col-sm-11 my-3"> 
         <div class="col-12 py-2 my-3 title d-flex justify-content-center align-items-center">
            <i class="fas fa-code"></i>
            <h3 class="h6 my-0 mx-3">BACK END</h3>
        </div>
             <ul class="d-flex flex-column align-items-center p-0">
                <Competence img="ts.png" label="TYPESCRIPT" />
                <Competence img="php.png" label="PHP" />
                <Competence img="nodejs.png" label="NODE.JS" />
                <Competence img="mysql.png" label="MYSQL" />
                <Competence img="mongodb.png" label="MONGODB" />
                <Competence img="sequelize.png" label="SEQUELIZE" />
                <Competence img="slim.png" label="SLIM FRAMEWORK" />
            </ul>   
        </div>
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
import Competence from '@/components/Competence.vue';

export default {
    components: {
        Competence
    }
}
</script>