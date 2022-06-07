<template>
  <div id="app">

    <!-- //Mise en page imageFond -->
    <div class="couleurFond">

      <h2>Profil</h2>

      <div class="profilAlignement">

      <!-- //Affichage de l'Avatar -->
        <div>
          <img
            class="imagesAvatar"
            :src="'/avatars/' + `${profils}` + '.png'"
          />
        </div>
      
      <!-- //Affichage du profil utilisateur -->
        <div class="profilAlignementTexte">
          <p>Pseudo : {{ profil.pseudo }}</p>
          <p>Email : {{ profil.email }}</p>
        </div>
      </div>

      <!-- //Bouton changer avatar -->
      <div class="ButtonAvatar, alignementBoutons">
        <button>
          <a class="sansLien" href="/avatarsProfilUtilisateursForum"
            >Changer Avatar</a
          >
        </button>

        <!-- //Forumaire Suprimmer Compte & Déconnexion -->
        <form id="idForum" @submit="checkForm" action="/" method="get">
          <input type="submit" value="Suprimmer Compte" class="Button" />
        </form>

        <form id="idForum" @submit="checkDeconnexion" action="/" method="get">
          <input type="submit" value="Déconnexion" class="Button" />
        </form>

      </div>
    </div>

  </div>
</template>


<script>

//Appel a Axios pour l'API
import axios from "axios";


export default {

  //Nom du components
  name: "loginModifForum",

  //Déclaration des variables
  data() {
    return {
      profils: [],
      profil: [],
      avatar: [],
      avatars: [],
      image: "../assets/avatars/",
      png: ".png",
    };
  },


  mounted() {

    //Appel a l'API Back-End pour afficher les avatars
    axios
      .get(`/api/avatars`,
      
      // Récupère le token
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })

      // Retourne une promesse nommée avatars
      .then((response) => {
        this.avatars = response.data.data;
      });

    //Appel a l'API Back-End pour recuperer id de l'utilisateur
    axios
      .get(`/api/user/${lectureCookie("id")}`,

      // Récupère le token
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })

      // Retourne une promesse nommée profil
      .then((response) => {
        this.profil = response.data.data;
      });


    //Appel a l'API Back-End pour recuperer ID des avatars
    axios
      .get(`/api/user/${lectureCookie("id")}`,
      
      // Récupère le token
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })

      // Retourne une promesse nommée profils
      .then((response) => {
        this.profils = response.data.data.avatar_id;
      });
   
  },


  ////////////// Supression compte ////////////////////

  methods: {


    //Appel du formulaire checkForm
    checkForm: function () {
      if (
        window.confirm("Suprimer votre compte utilisateur : Oui ou Annuler ?")
      ) {
        
        //Appel a l'API Back-End
        axios.delete(`/api/compte/${lectureCookie("id")}`,

        // Récupère le token
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        });


      }
        this.$router.push("/");

    },


////////////// Supression compte FIN /////////////////


  ////////////// Deconnexion compte ////////////////////

    //Appel du formulaire checkDeconnexion
    checkDeconnexion: function () {
      if (!window.alert("Déconnexion réussie")) {
        
        //Appel a l'API Back-End
        axios.get(
          `/api/compte/${lectureCookie("id")}`,

          // Supression du token
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: sessionStorage.clear(),
            },
          }

        );
      }
      this.$router.go();
    },

      ////////////// FIN Deconnexion compte /////////////////
  },
};


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


// let allcookies = document.cookie;
//     alert(allcookies);

    
</script>

<style scoped>

/* //////////////// media queries ///////////////
////////////////// Portable ///////////////// */

@media screen and (max-width: 640px) {
  .couleurFond {
    background-image: url("images/yellow.png");
    background-size: 100% auto;
    width: 95%;
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
  .alignementBoutons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 5%;
  }
  .profilAlignement {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .profilAlignementTexte {
    display: flex;
    flex-direction: column;
  }
  .imagesAvatar {
    margin-top: -20px;
    width: 110px;
  }
  a:link,
  a:visited {
    text-decoration: none;
    color: black;
  }
  h2 {
    text-align: center;
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
  }
  a:link,
  a:visited {
    text-decoration: none;
    color: black;
  }
  .texteGauche {
    text-align: left;
    width: 100%;
  }
  .ButtonAvatar {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 5%;
  }
  .sansLien {
    text-decoration: none;
    color: black;
  }
  .Button {
    text-align: center;
    width: 100%;
    margin-top: 10px;
  }
  .alignementBoutons {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    margin-top: 5%;
  }
  .largeurChamp {
    width: 95%;
  }
  .imagesAvatar {
    margin-top: -20px;
    width: 130px;
  }
}
</style>
