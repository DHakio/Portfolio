<template>
    <header id="header" class="d-flex shadow py-3">
        <nav class="ml-auto d-flex justify-content-end col-12">
            <ul class="p-0 mb-0 d-flex justify-content-around">
                <li class="text-center my-3 font-bold mx-3"><a href="#about">A PROPOS</a></li>
                <li class="text-center my-3 font-bold mx-3"><a href="#projects">MES PROJETS</a></li>
                <li class="text-center my-3 font-bold mx-3"><a href="#contact">ME CONTACTER</a></li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    #header {
        background-color: #26292e;
        color: #3e92a3;
        li {
            list-style: none;
            a {
                color: inherit;
                &:hover {
                    text-decoration: none;
                    color: #FF5335;
                }
            }
        }
    }
</style>