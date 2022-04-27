<template>
  <div id="app">
    <!-- <p v-if="errors.length">
            <strong>Une ou plusieurs erreurs ont été détectées</strong>
            <ul>
                <li v-for="error in errors">{{error}}</li>
            </ul>
        </p> -->

    <div class="couleurFond">
      <h2 class="couleurh2">Messages du Forum Groupomania</h2>
      <button class="couleurButton">Publier un message</button>

  
      <p v-for="forum in forums.reverse().slice(0, 50)" :key="forum.id">

        <span class="titre"><a :href="`http://localhost:8880/api/forums/{id_messages}`">{{ forum.sujet }}</a>
        
        </span> <br> <span class="sousTitre"> Speudo : {{ forum.nom_utilisateur }} - Avatar {{ forum.avatar }} - créer le {{ forum.created }}</span></p>

      <button class="couleurButton">Message précedent</button>
      <button class="couleurButton" @click="counter += 1">Messages suivant</button>
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
                    forums: [],
                    counter: 5,
                    forum: [],
                    id_messages: Number
                    

                }
            },

                //Affiche tout les utilisateur
                mounted() {
                    console.log('Steve');
                    axios.get('http://localhost:8880/api/forums')
                        .then(response => (this.forums = response.data.data))
                    


                      },
                       

                    headers: {
                          'Content-Type': 'application/json',
                          'Authorization': sessionStorage.getItem('id_messages')
                  
                          }



}
</script>

<style scoped>
.couleurFond {
  background-image: url("images/yellow.png");
  background-size: 100% auto;
  width: 100%;
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

.couleurButton {
  /* background: red; */
}

.couleurh2 {
  background-color: rgb(255, 255, 255);
  border: solid 1px black;
}
.sousTitre {
  font-size: 12px;
}
.titre {
  font-size: 18px;
  font-weight: 600;
}
</style>