<template>
  <div id="app">

    <!-- //Mise en page imageFond -->
    <div class="couleurFond">

      <h2 class="couleurh2">Messages du Forum Groupomania</h2>


      <button class="couleurButtonMessage">

        <a class="couleurLien" href="/titreMessagesUtilisateursForum"
          >Publier un message</a
        >
      </button>

      <!-- //Boucle for pour les messages du forum -->
      <p v-for="forum in forums.reverse().slice(0, 50)" :key="forum.id">
        
        <!-- //Affichage des titres -->
        <span class="titre"
          ><a :href="`/reponseMessagesUtilisateursForum/${forum.id}`">{{
            forum.sujet
          }}</a>
        </span>
        <br />

        <!-- //Affichage des réponses -->
        <span class="reponseStyle"> Réponses : </span

        ><br />

        <!-- <span class="reponseStyle"> Réponses : {{ message.length }} </span
        ><br /> -->

        <!-- //Affichage des avatars -->
        <span class="sousTitre">
          <img
            class="imagesAvatar"
            :src="'/avatars/' + `${forum.avatar}` + '.png'"
          />

          <!-- ////Affichage des Speudo -->
          Speudo : {{ forum.nom_utilisateur }} -
          <br />

          <!-- //Affichage des dates -->
          créer le {{ forum.createdDate }}

          <!-- //Supression des messages -->
          <form
            id="checkFormSuprim"
            @submit="checkFormSuprim"
            action="/profilUtilisateursForum"
            method="get"
          >

            <!-- //Bouton Suprimmer -->
            <p>
              <input type="submit" value="Suprimmer" class="ButtonSup" />
            </p>

          </form>

        </span>

      </p>

    </div>
  </div>
</template>


<script>

//Appel a Axios pour l'API
import axios from "axios";

//Appel a moment pour les dates
import moment from "moment";

// Format Date avec moment
var date = moment().format("YYYY-MM-DD HH:mm:ss");
console.log(date.toString());


export default {

  //Nom du components
  name: "titreMessageForum",

  //Déclaration des variables
  data() {
    return {
      nom_utilisateur: "",
      email: "",
      mot_de_passe: "",
      avatar: 1,
      forums: [],
      forum: [],
      user: [],
      users: [],
      counter: 1,
      current: 30,
      total: 0,
      message: [],
      length: "",
      id: "",
    };
  },


  mounted() {

    //Appel a l'API Back-End pour avoir ID des utilisateurs
    axios
      .get(
        `/api/user/${lectureCookie("id")}`,

        // Récupère le token
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )

      // Retourne une promesse nommée avatarProfil
      .then((response) => {
        this.avatarProfil = response.data.data.avatar_id;
      });

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


    //Appel a l'API Back-End pour avoir la liste des messages du forum
    axios
      .get(
        "/api/forums",

        // Récupère le token
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )

      // Retourne une promesse nommée forums
      .then((response) => {
        this.forums = response.data.data;
      });


    //Appel a l'API Back-End pour lister le nombre de reponses des messages
    axios
      .get(
        `/api/discussions/`,

        // Récupère le token
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )

      // Retourne une promesse nommée response
      .then((response) => {
        this.message = response.data.data;
        console.log(response.data.data);
      });
  },




  methods: {

    //Appel du formulaire checkFormSuprim pour suprimmer un message
    checkFormSuprim: function () {

      //Appel a l'API Back-End
      axios.delete(
        `/api/forums/`,

        // Récupère le token
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );
    },

  },
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
    margin-bottom: 10px;
  }

  .texteGauche {
    text-align: left;
    width: 100%;
  }

  .largeurChamp {
    width: 95%;
  }

  .couleurLien {
    color: white;
    text-decoration: none;
  }

  .directiveMessages {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 5%;
  }

  .couleurButtonMessage {
    background-color: #4600d1;
    border-radius: 2px;
    color: white;
    font-size: 13px;
    width: 180px;
    height: 30px;
    margin-bottom: 8px;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
    text-align: center;
  }

  .couleurh2 {
    background-color: rgb(255, 255, 255);
    border: solid 1px black;
  }
  .sousTitre {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    justify-content: center;
    align-items: center;
  }
  .titre {
    font-size: 18px;
    font-weight: 600;
  }

  .ButtonSup {
    width: 60px;
    font-size: 8px;
    background-color: rgba(255, 255, 255, 0);
    margin-left: 5px;
  }
  .reponseStyle {
    font-weight: bold;
  }
  .imagesAvatar {
    width: 12%;
    height: 12%;
    margin-right: 4px;
  }
}

/* //////////////// media queries ///////////////
////////////////// PC et Tablet ///////////////// */

@media screen and (min-width: 641px) {
  .couleurFond {
    background-image: url("images/yellow.png");
    background-size: 100% auto;
    width: 96%;
    text-align: center;
    padding: 10px;
    border: 1px solid black;
    margin-bottom: 10px;
  }

  .ButtonSup {
    width: 60px;
    font-size: 8px;
    background-color: rgba(255, 255, 255, 0);
    margin-left: 5px;
  }

  .texteGauche {
    text-align: left;
    width: 100%;
  }

  .largeurChamp {
    width: 95%;
  }

  .couleurLien {
    color: white;
    text-decoration: none;
  }

  .couleurButtonMessage {
    background-color: #4600d1;
    border-radius: 2px;
    color: white;
    font-size: 13px;
    width: 180px;
    height: 30px;
    margin-bottom: 8px;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
    text-align: center;
  }

  .couleurh2 {
    background-color: rgb(255, 255, 255);
    border: solid 1px black;
  }
  .sousTitre {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    justify-content: center;
    align-items: center;
  }
  .titre {
    font-size: 18px;
    font-weight: 600;
  }

  .directiveMessages {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 5%;
  }
  .reponseStyle {
    font-weight: bold;
  }
  .imagesAvatar {
    width: 10%;
    height: 10%;
    margin-right: 4px;
  }
}
</style>
