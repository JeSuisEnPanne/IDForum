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

      <form id="idForum" @submit="checkForm" action="https://vuejs.org/" method="post">
        <p class="texteGauche">

          <label for="nom_utilisateur">Pseudo :</label><br />
          <input
            id = "nom_utilisateur"
            type="text"
            name="nom_utilisateur"
            v-model="nom_utilisateur"
          />
        </p>

         <p class="texteGauche">
          <label for="email">Mail :</label><br />
          <input
            id = "email"
            type="text"
            name="email"
            v-model="email"
          />
        </p>

        <p class="texteGauche">
          <label for="mot_de_passe">Mot de passe :</label><br />
          <input
            id = "mot_de_passe"
            type="password"
            name="mot_de_passe"
            v-model="mot_de_passe"
          />
        </p>

        <p>
          <input type="submit" value="Envoyer" />
        </p>
      </form>
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
                    nom_utilisateur: null,
                    email: null,
                    mot_de_passe: null,
                    avatar_id: null,
                    isAdmin: null,
                    pokemons: [],

                }
            },

                //Affiche tout les utilisateur
  


            methods: {

                  checkForm: function () {
                         
                    console.log('Steve');
                    axios.post('http://localhost:8880/api/signup', {
                      email: this.email,
                      password: this.mot_de_passe,
                      pseudo: this.nom_utilisateur,
                      avatar_id: this.avatar_id,
                      isAdmin: this.isAdmin
                    })
                        .then(response => (this.pokemons = response.data.data))

                        
                    
                    this.$router.push('loginUnCompteForum') 

                    },
                      }
                    }
                  

</script>

<style scoped>
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
</style>

<style scoped>

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
</style>
