<template>

  <div id="app">

    <!-- //Mise en page imageFond -->
    <div class="couleurFond">

      <h2>Créer un compte</h2>

      <!-- //Formulaire avec bouton d'envoie "checkForm" -->
      <form id="idForum" v-on:submit.prevent="checkForm">

        <!-- //Champ Pseudo -->
        <p class="texteGauche">
          <label for="nom_utilisateur">Pseudo : </label>
          <input
            class="largeurChamp"
            id="nom_utilisateur"
            type="text"
            name="nom_utilisateur"
            v-model="nom_utilisateur"
            pattern="[A-Z0-9a-zéèêïç -]{2,30}"
            title="Incorrect, peut contenir 2 à 30 caractères des lettres chifres et: é è ê ï ç - espace"
            required
          />

        </p>

        <p class="texteGauche">

          <!-- //Champ Mail -->
          <label for="email">Mail : </label>
          <input
            class="largeurChamp"
            id="email"
            type="text"
            name="email"
            v-model="email"
            pattern="[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}"
            title="Incorrect, peut contenir des lettres, chiffres et: - @ _ ."
            required
          />

        </p>

        <p class="texteGauche">

           <!-- //Champ Mot de passe -->
          <label for="mot_de_passe">Mot de passe : </label>
          <input
            class="largeurChamp"
            id="mot_de_passe"
            type="password"
            name="mot_de_passe"
            v-model="mot_de_passe"
            pattern="[a-zA-Z0-9]{5,13}"
            title="Incorrect, peut contenir 5 à 13 caractères avec des lettres et chiffres uniquement : a-z A-Z 0-9 "
            required
          />

        </p>

            <!-- //Message alerte champ Incorrect -->
            <p class="text-rouge" v-text="errors.message"></p>

        <p>

          <!-- //Bouton Envoyer Formulaire -->
          <input type="submit" value="Envoyer" />

        </p>

      </form>

    </div>
  </div>

</template>


<script>

//Appel a Axios pour l'API
import axios from "axios";


export default {

  //Nom du components
  name: "InscriptionForum",

  //Déclaration des variables
  data() {
    return {
      nom_utilisateur: null,
      email: null,
      mot_de_passe: null,
      errors: [],
      error: [],
      isAdmin: null,
      forums: [],
      forum: [],
      response: [],


    };
  },

  methods: {

    checkForm: function () {
      
          //Appel a l'API Back-End pour creer un utilisateur
          axios
          .post("/api/signup", {
            email: this.email,
            password: this.mot_de_passe,
            pseudo: this.nom_utilisateur,
            isAdmin: this.isAdmin,
          })

          //Retourne une erreur de l'API
          .catch(error => {
            this.errors = error.response.data.error.errors[0]
          })

          // Retourne une promesse nommée forums
          .then((response) => {
            this.forums = response.data.data

            // Si OK alors renvoie vers loginUnCompteForum
            this.$router.push("loginUnCompteForum");
            
            });
            
    }
  },
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

  .texteGauche {
    text-align: left;
    width: 100%;
  }

  .largeurChamp {
    width: 100%;
  }
  h2 {
    font-size: 13px;
  }
  label {
    font-size: 13px;
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
  h2 {
    font-size: 13px;
  }
  label {
    font-size: 13px;
  }
}
</style>
