<template>
  <div id="app">
    <div class="couleurFond">
      <h2>Créer un compte</h2>

      <form id="idForum" @submit="checkForm" action="#" method="post">
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

        <p>
          <input type="submit" value="Envoyer" />
        </p>
      </form>
      <p v-for="forum in forums" :key="forum.id">{{ forum.contenu }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: "InscriptionForum",

  data() {
    return {
      nom_utilisateur: null,
      email: null,
      mot_de_passe: null,
      avatar_id: null,
      isAdmin: null,
      forums: [],

    };
  },

  //Affiche tout les utilisateur

  methods: {
    checkForm: function () {
      if (!window.alert("Création du compte reussie !")) {
        axios
          .post("/api/signup", {
            email: this.email,
            password: this.mot_de_passe,
            pseudo: this.nom_utilisateur,
            avatar_id: this.avatar_id,
            isAdmin: this.isAdmin,
          })

          .catch((error) => {
            console.log(error.response.data.error.errors);
          })

          .then((response) => (this.forums = response.data.data));

        this.$router.push("loginUnCompteForum");
      }
    },
  },
};
</script>

<style scoped>
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
