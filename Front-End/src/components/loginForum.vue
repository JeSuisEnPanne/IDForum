<template>

  <div id="app">

    <!-- //Mise en page imageFond -->
    <div class="couleurFond">

      <h2>Se Connecter</h2>

      <!-- //Formulaire avec bouton d'envoie "checkForm" -->
      <form id="idForumLogin" v-on:submit.prevent="checkForm">

        <!-- //Champ Mail -->
        <p class="texteGauche">
          <label for="email">Mail :</label><br />
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

        <!-- //Champ Mot de passe -->
        <p class="texteGauche">
          <label for="mot_de_passe">Mot de passe :</label><br />
          <input
            class="largeurChamp"
            id="mot_de_passe"
            type="password"
            name="mot_de_passe"
            v-model="mot_de_passe"
            pattern="[a-zA-Z0-9]{5,13}"
            title="Incorrect, peut contenir  à 13 caractères avec des lettres et chiffres uniquement : a-z A-Z 0-9 "
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
  name: "loginForum",

  //Déclaration des variables
  data() {
    return {
      email: null,
      mot_de_passe: null,
      forums: [],
      forum: [],
      errors: [],
      error: [],
    };
  },


  methods: {

    //Appel au formullaire checkForm
    checkForm: function () {

      //Appel a l'API Back-End pour se connecter au site
      axios
        .post("/api/login", {
          email: this.email,
          password: this.mot_de_passe,
        })


        .then((response) => {


          //Initialise le Token
          sessionStorage.setItem("token", response.data.token);

          // Retourne une promesse nommée forums
          this.forums = response.data.data;

          //Si ok alors envoie sur la page profilUtilisateursForum
          this.$router.push("/profilUtilisateursForum");
        })
        .catch((error) => {
          this.errors = error.response.data;
        });

    },
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

  .largeurChamp {
    width: 95%;
  }

  h2 {
    font-size: 12px;
  }
  label {
    font-size: 12px;
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
    font-size: 12px;
  }
  label {
    font-size: 12px;
  }
}
</style>
