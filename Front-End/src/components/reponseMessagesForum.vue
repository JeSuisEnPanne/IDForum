<template>
  <div id="app">

<div class="imageFond">
<div class="couleurFond">
      <h3>Titre du sujet</h3>

      <div class="sujet">

        
               <p v-for="forum in forums" :key="forum.id" v-html="forum.contenu"></p>
         

         


      </div>

      <form id="idForum" @submit="checkForm" action="https://vuejs.org/" method="post">
       
        <div class="info">
          <img class="imagesAvatar" src="https://i.ibb.co/MG8qZFg/6.png">
          <label for="champContenue">Pawak</label><br>
          <p class="date">Poster le 13 janvier 2021 à 15h57</p>
          <img class="imagesAvatar" src="https://i.ibb.co/QX93fRN/pouce.png">
          <h2>1</h2>
          <button>Modifier</button>

        <p>
          <input type="submit" value="Répondre" class="Button" />
        </p>

        </div>
      </form>
      
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
                    forums: [],
                    counter: 5,
                    forum: [],
                    content: null

                }
            },

             components: {
      
                
                   },

                //Affiche tout les utilisateur
                mounted() {
                    console.log('Steve');
                    axios.get('http://localhost:8880/api/forums')
                        .then(response => (this.forums = response.data.data))
                    

                    },


            methods: {

                onFocusOut: function(e) {
                this.content = e.target.innerHTML 
    }

                    },
}

</script>

<style scoped>



.couleurFond {
  background-color: url("images/yellow.png");
  background-size: 100% auto;
  width: 85%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
}

#sujet {
  width: 80%;
}

p.contenu {
  background-color: rgb(255, 255, 255);
}
.imagesAvatar{
  text-align: center;
  width: 50px;
}
.info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
  flex-wrap: wrap;
}
h3{
  background-color: #2cb7f8;
  text-align: center;
  border: solid 1px black;
}
.sujet{
  height: 100%;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border: solid 1px black;
}
.date{
 
  font-size: 13px;
}

</style>
