<template>
  <div id="app">
    <div class="couleurFond">
      
      <div
        v-for="avatar in avatars.reverse()"
        :key="avatar.id"
        :data-id="avatar.id"
        
      >
    
        <div v-on:click="avatarImage">

                <a :href="`http://localhost:8880/api/forums/${avatar.id}`">

                  <img
                    data-original="{{ avatar.avatar }}"
                    v-bind:src="avatar.avatar"
                    class="lazy"
                    alt=""
                  />
                </a>
        </div>
        
      </div>

        <div class="retour">
          <button class="agrandirBouton">
              <a class="retourLien" :href="`http://localhost:8080/profilUtilisateursForum`">Retour</a>
          </button>
        </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "titreMessageForum",

  data() {
    return {
      avatars: [],
      avatar: [],
      sujet: '',
      contenu: '',
      nom_utilisateur: null,
      id_discussion: null,
      likes: null,
      errors: [],
      pokemons: [],
      content: null,
    };
  },

  //Affiche tout les utilisateur
  mounted() {

      axios.get('http://localhost:8880/api/avatars')
          .then(response => {
            this.avatars = response.data.data
            
          },
          
          {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': sessionStorage.getItem('token')
      
              }
        }
        
        )
          

  },

  avatarImage: function (e) {
  
    axios.put(
      "http://localhost:8880/api/forums/1",
      {
        sujet: 'null',
        contenu: 'null',
        nom_utilisateur: "null",
        id_discussion: this.id_discussion,
        likes: "null",
        avatar: "null",
      },
    
    );

    e.preventDefault();
  },

  methods: {},
};
</script>

<style scoped>

@media screen and (max-width:640px){

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
.couleurFond {
  background-image: url("images/yellow.png");
  background-size: 100% auto;
  width: 95%;
  text-align: center;
  padding: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.retour{
 margin-left: 42%;
 
}

/* .agrandirBouton {
background-color: #ffffff;
border-radius: 2px;
color: white;
font-size: 12px;
width: 140px;
height: 30px;
margin-bottom: 8px;
font-weight: bold;
font-family: 'Raleway', sans-serif;
text-align: center;
} */

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
.lazy {
  width: 65px;
}

}

@media screen and (min-width:641px){
.couleurFond {
  background-image: url("images/yellow.png");
  background-size: 100% auto;
  width: 200px;
  text-align: center;
  padding: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.texteGauche {
  text-align: left;
  width: 100%;
}

.largeurChamp {
  width: 95%;
}

.retour{
 margin-left: 35%;
 
}

.couleurButton {
  /* background: red; */
}

.couleurh2 {
  background-color: rgb(57, 139, 246);
}
.lazy {
  width: 65px;
}
}



</style>
