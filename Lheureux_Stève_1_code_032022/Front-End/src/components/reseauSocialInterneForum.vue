<template>
  <div id="app">

    <!-- //Mise en page imageFond -->
    <div class="couleurFond">
      <p class="titreForumBleu">
        Réseau social interne
        <spam class="titreForumRouge">de Groupomania</spam>
      </p>

      <div class="bordureTexte">
        <p>
          Groupomania mais à disposition a sont personnels un reseau social.<br /><br />
          Vous pouvez partager entre employés des messages, commentaires et
          images depuis le forum, avec d'autres collègues sur ce qui vous
          intéressent.<br /><br />
        </p>
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

  .texteGauche {
    text-align: left;
    width: 100%;
  }

  .largeurChamp {
    width: 95%;
  }

  .couleurh2 {
    background-color: rgb(57, 139, 246);
  }

  .logo {
    width: 200px;
  }

  .bordureTexte {
    border-radius: 2px;
    color: rgb(0, 0, 0);
    font-size: 12px;
    width: 100%;
    height: 100%;
    margin-bottom: 8px;
    font-family: "Raleway", sans-serif;
  }

  .titreForum {
    border-radius: 2px;
    color: rgb(0, 0, 0);
    font-size: 11px;
    width: 205px;
    height: 100%;
    margin-bottom: 8px;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
  }
  .titreForumBleu {
    font-size: 15px;
    color: #2c69f5;
    font-weight: 900;
    font-family: "Raleway", sans-serif;
  }
  .titreForumRouge {
    font-size: 10px;
    color: #fd2d01;
    font-weight: 900;
    font-family: "Raleway", sans-serif;
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

  .logo {
    width: 200px;
  }

  .bordureTexte {
    border-radius: 2px;
    color: rgb(0, 0, 0);
    font-size: 10px;
    width: 200px;
    height: 100%;
    margin-bottom: 8px;
    font-family: "Raleway", sans-serif;
  }

  .titreForum {
    border-radius: 2px;
    color: rgb(0, 0, 0);
    font-size: 11px;
    width: 205px;
    height: 100%;
    margin-bottom: 8px;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
  }
  .titreForumBleu {
    font-size: 10px;
    color: #2c69f5;
    font-weight: 900;
    font-family: "Raleway", sans-serif;
  }
  .titreForumRouge {
    font-size: 10px;
    color: #fd2d01;
    font-weight: 900;
    font-family: "Raleway", sans-serif;
  }
}
</style>
