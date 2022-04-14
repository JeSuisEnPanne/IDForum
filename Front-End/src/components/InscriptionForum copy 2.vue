<template>
  <div id="app">
    <!-- <p v-if="errors.length">
            <strong>Une ou plusieurs erreurs ont été détectées</strong>
            <ul>
                <li v-for="error in errors">{{error}}</li>
            </ul>
        </p> -->

    <div class="couleurFond">
      <h2>Créer un compte</h2>

      <form v-on:submit="verif" @submit.prevent="submitComment">
        <p class="texteGauche">
          <label for="nom_utilisateur">Pseudo :</label><br />
          <input
            class="largeurChamp"
            type="text"
            name="nom_utilisateur"
            v-model="nom_utilisateur"
          />
        </p>

         <p class="texteGauche">
          <label for="email">Mail :</label><br />
          <input
            class="largeurChamp"
            type="text"
            name="email"
            v-model="email"
          />
        </p>

        <p class="texteGauche">
          <label for="mot_de_passe">Mot de passe :</label><br />
          <input
            class="largeurChamp"
            type="password"
            name="mot_de_passe"
            v-model="mot_de_passe"
          />
        </p>

        <p>
          <input type="submit" value="Envoyer" />
        </p>
      </form>
      <p>lala</p>
      <p v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.contenu }}</p>
    </div>
  </div>
</template>

<script>


import axios from "axios";


export default {

            name: 'InscriptionForum',


             data() {
                return {
                    nom_utilisateur: '',
                    email: '',
                    mot_de_passe: '',
                    avatar: 1,
                    show: false,
                    mesDonnees: '',
                    pokemons: [],

                }
            },

                //Affiche tout les utilisateur
                mounted() {
                    console.log('Steve');
                    axios.post('http://localhost:8880/api/signup', {
                      email: this.email,
                      password: this.mot_de_passe,
                      pseudo: this.nom_utilisateur
                    })
                        .then(response => (this.pokemons = response.data.data))
                    

                    },


            methods: {

                // // submitComment() {

                // //     axios.get('http://localhost:8880/api/pokemons')
                //         .then(response => (console.log(response)))

                // // },




                valide(mail) {
                    let ex = new RegExp()
                    return ex.test(mail)
                },

                    },
}
</script>

<style>
.couleurFond {
  background-image: url("images/yellow.png");
  background-size: 100% auto;
  width: 200px;
  text-align: center;
  padding: 10px;
  border: 1px solid black;
}

.texteGauche {
  text-align: left;
  width: 100%;
}

.largeurChamp {
  width: 95%;
}
</style>
