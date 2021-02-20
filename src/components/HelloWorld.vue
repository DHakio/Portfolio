<template>
  <div class="portfolio">
    <div class="side-navbar">
      <div class="photo"></div>
      <div>
        <h1>DAMIEN MICHEL</h1>
        <h2>DEVELOPPEUR WEB FULLSTACK</h2>
      </div>
      <div class="hr"></div>
      <ul>
        <li><a href="#">INFOS</a></li>
        <li><a href="#">PROJETS</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
      <ul class="social-list"> 
        <li><a class="social" href="mailto:hello@damienmichel.fr"><i class="far fa-envelope"></i></a></li>
        <li><a class="social" href="https://www.linkedin.com/in/damien-michel-a21aa0115/"><i class="fab fa-linkedin"></i></a></li>
        <li><a class="social" href="https://github.com/DHakio"><i class="fab fa-github"></i></a></li>
      </ul>
    </div>
    <div class="content">
      <h3>SITE EN CONSTRUCTION</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "Montserrat bold";
  src: url("../assets/fonts/Montserrat-Bold.ttf");
  }
@font-face {
  font-family: "Montserrat classic";
  src: url('../assets/fonts/Montserrat-Regular.ttf')
}

.portfolio {
  display: flex;
  justify-content: center;
  font-family: "Montserrat bold";
}
.side-navbar {
  background-color: #494e5f;
  height: 100vh;
  width: 21rem;
  color: #ffe7d4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  box-sizing: border-box;
}
.photo {
  min-height: 10rem;
  min-width: 10rem;
  background-image: url('../assets/images/photo.jpg');
  border-radius: 100%;
  background-size: 100%;
  background-position: center;
}
h1 {
  margin-bottom: 0;
}
h2 {
  font-size: 0.6rem;
  letter-spacing: 0.2rem;
  line-height: 1rem;
}
.hr {
  background-color:#ffe7d4;
  width: 100%;
  min-height: 0.1rem;
  margin: 1.5rem 0;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
  margin: 2rem 0;
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: white;
}
.social-list {
  margin-top: auto;
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.social {
  font-size: 2rem;
}
.content {
  background-color:#fefefa;
  min-height: 100vh;
  width: 50rem;
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.1);
  padding: 3rem;
  box-sizing: border-box;
}
h3 {
  background-color: #ffe7d4;
  font-size: 2rem;
  width: auto;
  text-align: center;
}
</style>