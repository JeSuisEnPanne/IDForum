<template>

  <div id="app">

    <!-- //Bouton Menu -->
    <div class="couleurFond">
      <p>Connexion pour poster des messages</p>
      <div class="alignement">
        <button class="creer">
          <a href="/creerUnCompteForum">Créer un compte</a>
        </button>
        <button class="login">
          <a href="/loginUnCompteForum">S'identifier</a>
        </button>
      </div>
    </div>

  </div>

</template>

<script>


export default {
  //Nom du components
  name: "titreMessageForum",

};
</script>

<style scoped>

/* //////////////// media queries ///////////////
////////////////// Portable ///////////////// */
@media screen and (max-width: 640px) {
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
  .couleurFond {
    background-image: url("images/yellow.png");
    background-size: 100% auto;
    width: 95%;
    text-align: center;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 1px 1px 1px black;
    margin-bottom: 10px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  .texteGauche {
    text-align: left;
    width: 100%;
  }

  .largeurChamp {
    width: 95%;
  }

  .couleurButton {
    /* background: red; */
  }

  .couleurh2 {
    background-color: rgb(57, 139, 246);
  }

  .logo {
    width: 200px;
  }

  p {
    font-size: 10px;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
  }

  .creer {
    background-color: #2cb7f8;
    border-radius: 2px;
    color: white;
    font-size: 12px;
    width: 140px;
    height: 30px;
    margin-bottom: 8px;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
  }

  .login {
    background-color: #ec412c;
    border-radius: 2px;
    color: white;
    font-size: 12px;
    width: 140px;
    height: 30px;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
  }

  .alignement {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}

/* //////////////// media queries ///////////////
////////////////// PC et Tablet ///////////////// */

@media screen and (min-width: 641px) {
  .couleurFond {
    background-image: url("images/yellow.png");
    background-size: 100% auto;
    width: 200px;
    text-align: center;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 1px 1px 1px black;
    margin-bottom: 10px;
  }

  .texteGauche {
    text-align: left;
    width: 100%;
  }

  .largeurChamp {
    width: 95%;
  }

  .couleurButton {
    /* background: red; */
  }

  .couleurh2 {
    background-color: rgb(57, 139, 246);
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  .logo {
    width: 200px;
  }

  p {
    font-size: 10px;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
  }

  .creer {
    background-color: #2cb7f8;
    border-radius: 2px;
    color: white;
    font-size: 12px;
    width: 140px;
    height: 30px;
    margin-bottom: 8px;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
  }
  .login {
    background-color: #ec412c;
    border-radius: 2px;
    color: white;
    font-size: 12px;
    width: 140px;
    height: 30px;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
  }
}
</style>
