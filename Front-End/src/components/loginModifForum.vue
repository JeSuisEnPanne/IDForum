<template>
  <div id="app">
    <!-- <p v-if="errors.length">
            <strong>Une ou plusieurs erreurs ont été détectées</strong>
            <ul>
                <li v-for="error in errors">{{error}}</li>
            </ul>
        </p> -->

    <div class="couleurFond">
      <h3>Profil</h3>
      <img class="imagesAvatar" src="https://i.ibb.co/MG8qZFg/6.png">
      <p>Pseudo : {{ profil.pseudo }}</p>
      <p>Email : {{ profil.email }}</p>
      <button><a href="http://localhost:8080/avatarsProfilUtilisateursForum">Changer Avatar</a></button>

      <!-- <button>Suprimmer Compte</button> -->
      
      <form id="idForum" @submit="checkForm" action="https://vuejs.org/" method="post">   
        <input type="submit" value="Suprimmer Compte" class="Button" v-on:click="showAlert('bonjour')" />
      </form>

    

    </div>
  </div>
</template>

<script>


import axios from "axios";


export default {


  name: 'loginModifForum',


             data() {
               return {
                 
                   profils: [],
                    profil: [],
                   

                                

                }
            },


    

                // Affiche un utilisateur dans le profil
                mounted() {
                  
                  axios.get(`http://localhost:8880/api/user/${sessionStorage.id}`, {

                   
                    
                    }, {
                      headers: {
                        'Content-Type': 'application/json',
                          'Authorization': 'Bearer ' + sessionStorage.getItem('token', 'id')

                  
                          }
                    })
                    
                        .then(response => (this.profil = response.data.data))
                        console.log(sessionStorage.id);
                        console.log(sessionStorage.token);

                        
                    },




              ///// Supression compte
                    
                  
                  methods: {


                  checkForm: function (e) {

                    if (window.confirm("Suprimer votre compte utilisateur : Oui ou Annuler ?")) {
                      
                    
                      
                      console.log('Steve');
                    axios.delete(`http://localhost:8880/api/compte/10`, {
                                     

                    }, {
                      headers: {
                          'Content-Type': 'application/json',
                          'Authorization': sessionStorage.getItem('token', 'id')
                  
                          }
                    } )

                        
                      }
                    
                    e.preventDefault();
                    this.$router.go()
                    

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
}

.texteGauche {
  text-align: left;
  width: 100%;
}

.largeurChamp {
  width: 95%;
}

.imagesAvatar {
  margin-top: -20px;
  width: 130px;
}
</style>