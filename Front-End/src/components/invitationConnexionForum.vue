<template>
  <div id="app">
    <div class="couleurFond">
        <p>Connexion pour poster des messages</p>
        <div>
          <button class="creer">Créer un compte</button>
          <button class="login">S'identifier</button>
        </div>
    </div>
  </div>
</template>

<script>


import axios from "axios";


export default {

            name: 'titreMessageForum',


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
                    axios.get('http://localhost:8880/api/forums')
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

.couleurButton {
  /* background: red; */
}

.couleurh2 {
  background-color: rgb(57, 139, 246);
}

.logo {
  width: 200px;

  
}

p {
font-size: 10px;
font-weight: 600;
font-family: 'Raleway', sans-serif;
}

.creer {
background-color: #2cb7f8;
border-radius: 2px;
color: white;
font-size: 12px;
width: 140px;
height: 30px;
margin-bottom: 8px;
font-weight: bold;
font-family: 'Raleway', sans-serif;
}
.login {
background-color: #ec412c;
border-radius: 2px;
color: white;
font-size: 12px;
width: 140px;
height: 30px;
font-weight: bold;
font-family: 'Raleway', sans-serif;
}
</style>
