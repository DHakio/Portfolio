<template>
    <header id="header" class="d-flex shadow p-3">
        <div class="d-flex justify-content-between flex-wrap col-sm-12 pr-0">
            <div class="d-flex align-items-center col-md-1 col-sm-12">
                <div>
                    <div class="photo"></div>
                </div>
                <div class="col-sm-1 col-md-1">
                    <h1 class="h2">DAMIEN MICHEL</h1>
                    <h2 class="font-thin mb-0">DEVELOPPEUR WEB FULLSTACK</h2>
                </div>
            </div>
            <nav class="col-lg-4 col-md-5 col-sm-12 d-flex align-items-end">
                <ul class="p-0 mb-0 d-flex justify-content-around col-sm-12 d-flex flex-wrap mt-3">
                    <li class="col-sm-12 col-md-4 text-center my-3"><router-link to="/">INFOS</router-link></li>
                    <li class="col-sm-12 col-md-4 text-center my-3"><router-link to="/projects">PROJETS</router-link></li>
                    <li class="col-sm-12 col-md-4 text-center my-3"><router-link to="/contact">CONTACTS</router-link></li>
                </ul>
            </nav>
            <ul class="col-sm-12 col-md-1 d-flex justify-content-around p-0 align-items-end mb-0 my-3"> 
                <li><a class="h4" href="mailto:hello@damienmichel.fr"><i class="far fa-envelope"></i></a></li>
                <li><a class="h4" href="https://www.linkedin.com/in/damien-michel-a21aa0115/"><i class="fab fa-linkedin"></i></a></li>
                <li><a class="h4" href="https://github.com/DHakio"><i class="fab fa-github"></i></a></li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    #header {
        background-color: #494e5f;
        color: #ffe7d4;
        z-index: 99;
        .photo {
            background-image: url('../assets/images/photo.jpg');
            background-size: 100%;
            background-position: center;
            height: 7rem;
            width: 7rem;
            border-radius: 5rem;
        }
        h2 {
            font-size: 0.6rem;
            letter-spacing: 0.2rem;
            line-height: 1rem;
        }
        li {
            list-style: none;
            a {
                color: inherit;
                &:hover {
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }
</style>