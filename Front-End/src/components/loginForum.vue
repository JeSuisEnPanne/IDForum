<template>
  <div id="app">
    <div class="couleurFond">
      <h2>Se Connecter</h2>

      <form
        id="idForumLogin"
        @submit="checkForm"
        action="http://localhost:8080/loginUnCompteForum"
        method="post"
      >
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

        <p>
          <input type="submit" value="Envoyer" />
          <!-- <input type="submit" value="Envoyer" @click="goToHome()"/> -->
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "loginForum",

  data() {
    return {
      email: null,
      mot_de_passe: null,
      forums: [],
    };
  },

  methods: {
    checkForm: function () {
      console.log("Steve");

      axios
        .post("http://localhost:8880/api/login", {
          email: this.email,
          password: this.mot_de_passe,
        })

        // .catch(window.alert("Adresse Mail ou Mot de pass incorect"))

        .then((response) => {
          sessionStorage.setItem("id", response.data.data.id);
          sessionStorage.setItem("token", response.data.token);

          console.log(response);
          this.forums = response.data.data;
        })
        .catch((error) => {
          alert(JSON.stringify(error.response.data));
        });

      // Steve
      this.$router.push("profilUtilisateursForum");
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
