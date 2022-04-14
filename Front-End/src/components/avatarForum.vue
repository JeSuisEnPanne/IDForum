<template>
  <div id="app">
  
<!-- q-page : composant page de Quasar avec marge intérieure -->
  <q-page padding>
    <ul>
      <li v-for="avatar in avatars" :key="avatar.id">{{ avatar }}</li>
    </ul>
  </q-page>



  </div>
</template>




<script>

import axios from "axios";


export default {

            name: 'loginForum',


             data() {
                return {
                    nom_utilisateur: '',
                    email: '',
                    mot_de_passe: '',
                    show: false,
                    avatars: ['image1', 'image2'],
                    pokemons: [],

                }
            },

                //Affiche tout les utilisateur
                mounted() {
                    console.log('Steve');
                    axios.post('http://localhost:8880/api/login', {
                      email: this.email,
                      password: this.mot_de_passe,
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
       


<style scoped>
.couleurFond {
  background-image: url("images/yellow.png");
  background-size: 80% auto;
  width: 500px;
  height: 500px;
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
