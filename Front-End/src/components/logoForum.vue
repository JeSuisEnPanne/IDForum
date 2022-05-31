<template>
  <div id="app">

    <!-- //Logo image -->
    <div class="couleurFond">
      <img class="logo" src="./images/logo.png" alt="" />
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
    background-color: #2cb7f8;
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
    background-color: #2cb7f8;
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
}
</style>
