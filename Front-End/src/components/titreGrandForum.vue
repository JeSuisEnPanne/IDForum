<template>
  <div id="app">
    <div class="couleurFond">
        <p class="titreForumBleu">Réseau social interne <spam class="titreForumRouge">de Groupomania</spam></p>
        <div class="bordureTexte">
          <p>
            Groupomania mais à disposition a sont personnels un reseau social.<br>
            Vous pouvez partager entre employés des messages,
            commentaires et images depuis le forum,<br>
            avec d'autres collègues sur ce qui vous intéressent.<br><br>
          </p>
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
  width: 600px;
  text-align: center;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 1px 1px 1px black;
  margin-bottom: 10px;
}


.bordureTexte {

border-radius: 2px;
color: rgb(0, 0, 0);
font-size: 12px;
width: 600px;
height: 100%;
margin-bottom: 8px;
font-family: 'Raleway', sans-serif;

}

.titreForum {
border-radius: 2px;
color: rgb(0, 0, 0);
font-size: 11px;
width: 605px;
height: 100%;
margin-bottom: 8px;
font-weight: bold;
font-family: 'Raleway', sans-serif;
}
.titreForumBleu {
  text-shadow: 1px 1px 1px black;
  font-size: 20px;
  color: #2c69f5;
  font-weight: 900;
  font-family: 'Raleway', sans-serif;
}
.titreForumRouge {
  font-size: 20px;
    color: #fd2d01;
  font-weight: 900;
  font-family: 'Raleway', sans-serif;
}
</style>
