<template>
  <div id="app">
    <!-- <p v-if="errors.length">
            <strong>Une ou plusieurs erreurs ont été détectées</strong>
            <ul>
                <li v-for="error in errors">{{error}}</li>
            </ul>
        </p> -->

    <div class="couleurFond">
      <h2>Se Connecter</h2>

      <form id="idForumLogin" @submit="checkForm" action="http://localhost:8080" method="post">

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
          <!-- <input type="submit" value="Envoyer" @click="goToHome()"/> -->
        </p>
      </form>
    </div>
  </div>
</template>

<script>


import axios from "axios";


export default {

            name: 'loginForum',


             data() {
                return {

                    email: null,
                    mot_de_passe: null,
                    forums: [],

                }
            },

                


            methods: {

               checkForm: function () {
                         
                    console.log('Steve');
                    axios.post('http://localhost:8880/api/login', {
                      email: this.email,
                      password: this.mot_de_passe,
                    })
                        .then(response => {

                          sessionStorage.setItem('token', response.data.token)
                          sessionStorage.setItem('id', response.data.data.id);
                          
                          console.log(response);
                          this.forums = response.data.data
                    })
                       
                        

                    this.$router.push('profilUtilisateursForum') 
                    

                    // goToHome(){
                    //     this.$router.push('profilUtilisateursForum'); 
                    //   }
                      
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
