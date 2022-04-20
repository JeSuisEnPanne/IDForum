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
      <p>Pseudo : {{ avatar.pseudo }}</p>
      <p>Email : {{ avatar.email }}</p>
      <button>Changer Avatar</button>
      <button>Suprimmer Compte</button>

    </div>
  </div>
</template>

<script>


import axios from "axios";


export default {

            name: 'loginModifForum',


             data() {
                return {

                    avatars: [],
                    avatar: [],

                }
            },

                //Affiche tout les utilisateur
                mounted() {
                    console.log('Steve');
                    axios.get('http://localhost:8880/api/user/7', {
                      


                    }, {
                       headers: {
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer ' + sessionStorage.getItem('token', 'id')
                          
                          
                          
                  
                          }
                    })
                    
                        .then(response => (this.avatar = response.data.data))
                    

                    },


        
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