<template>

  <div id="app">

    <!-- // Formulaire "avatarForm" pour afficher les avatars -->
    <form
      id="idForum"
      @submit="avatarForm"
      action="/profilUtilisateursForum"
      method="get"
    >

      <!-- //Conteneur pour FlexBox -->
      <div class="couleurFond">
        
        <!-- //Boucle for pour trier les avatars -->
        <div
          v-for="avatar in avatars.reverse()"
          :key="avatar.id"
          :data-id="avatar.id"
        >

          <!-- //Affichage des Avatars et evenement au click sur les images avatars -->
          <div @click="avatarForm(avatar.id)">

            <img
              data-original="${{avatar.id}}"
              v-bind:src="avatar.avatar"
              class="lazy"
              alt=""
            />
            
          </div>
        </div>
        
        <!-- //Bouton retour index -->
        <div class="retour">
          <button class="agrandirBouton">
            <a class="retourLien" :href="`/profilUtilisateursForum`">Retour</a>
          </button>
        </div>

      </div>
    </form>

  </div>
</template>

<script>

//Appel a Axios pour l'API
import axios from "axios";

export default {

  //Nom du components
  name: "titreMessageForum",

  //Déclaration des variables
  data() {
    return {
      avatars: [],
      avatar: [],
      avatar_id: null,
    };
  },

 
  mounted() {

    //Appel a l'API Back-End
    axios
      .get(
        `/api/avatars`,


        // Récupère le token
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )

      // Retourne une promesse nommée avatars
      .then((response) => {
        this.avatars = response.data.data;
      });
 
  },



  methods: {

    //Appel du formulaire avatarForm
    //Mes a jour ID des avatars dans le tableau USER de la BDD
    //${lectureCookie("id")} -- Récupaire l'ID dans le Cookie
    avatarForm: function (id) {
      axios.put(
        `/api/signup/${lectureCookie("id")}`,

        // recupaire l'ID de l'image Avatars depuis la BDD
        {
          avatar_id: id,

        },
        
        // Récupère le token
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        },
        
        //Rafraichir la page au changement de l'avatar au click
        location.reload()
      );


      /////////////////// Cookie /////////////////////
      ////////////////////////////////////////////////

      /* Définition de la fonction JavaScript de lecture d'un cookie */
      function lectureCookie(id) {
        /* Test de présence du cookie */
        if (document.cookie.length == 0) {
          /* Valeur de retour null */
          return null;
        } else {
          /* Mise en tableau tabElements des éléments du cookie */
          /* NB : On se base sur le séparateur point-virgule */
          var tabElements = document.cookie.split(";");
          /* Recherche du = séparant le nom de l'élément 
        de la valeur de l'élément pour le 1er élément (n° 0)*/
          var positionEgal = tabElements[0].indexOf("=", 0);
          var nomElement = tabElements[0].substring(0, positionEgal);
          var valeurElement = tabElements[0].substring(positionEgal + 1);
          if (nomElement == id) {
            return unescape(valeurElement);
          }

          return null;
        }
      }

      ///////////////////// FIN ////////////////////////////
      /////////////////////////////////////////////////////

    },
  },
};
</script>



<style scoped>

/* //////////////// media queries ///////////////
////////////////// Portable ///////////////// */

@media screen and (max-width: 640px) {

  /* //Importation Police avec Google Font */
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
 
  .couleurFond {
    background-image: url("images/yellow.png");
    background-size: 100% auto;
    width: 95%;
    text-align: center;
    padding: 10px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .retour {
    margin-left: 42%;
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
  .lazy {
    width: 65px;
  }
}

/* //////////////// media queries ///////////////
////////////////// PC et Tablet ///////////////// */

/* //Importation Police avec Google Font */
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
 
@media screen and (min-width: 641px) {
  .couleurFond {
    background-image: url("images/yellow.png");
    background-size: 100% auto;
    width: 200px;
    text-align: center;
    padding: 10px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .texteGauche {
    text-align: left;
    width: 100%;
  }

  .largeurChamp {
    width: 95%;
  }

  .retour {
    margin-left: 35%;
  }

  .couleurh2 {
    background-color: rgb(57, 139, 246);
  }
  .lazy {
    width: 65px;
  }
}

</style>
