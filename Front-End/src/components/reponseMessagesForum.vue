<template>
  <div id="app">
    <div class="imageFond">
      <div class="couleurFond">
      <!-- <div v-if="forum.id == forum.sujet" style="color:red"> -->
        <h3
        
          v-for="forum in forums"
          :data-id="forum.id"
          :key="forum.id"
          v-html="forum.sujet"
        ></h3>
      <!-- </div> -->

      
        <div class="sujet">

          <p
            class="largeurImages"
            v-for="forum in forums"
            :data-id="forum.id"
            :key="forum.id"
            v-html="forum.contenu"
          >
          </p>
                  {{ forum.contenu }}

      
        </div>


<!-- discutions -->

        <div class="discussion">

          <p
            v-for="discussion in discussions"
            :data-id="discussion.id"
            :key="discussion.id"
            v-html="discussion.contenu"
          > 
          </p> 
              
        </div>

<!-- fin  -->

        <form
          id="idForum"
          @submit="checkForm"
          action="https://vuejs.org/"
          method="post"
        >
          <div class="info">
            <img class="imagesAvatar" src="https://i.ibb.co/MG8qZFg/6.png" />


<!-- // Nom d'utilisateur -->



            <p
            v-for="forum in forums"
            :data-id="forum.id"
            :key="forum.id"
            v-html="forum.nom_utilisateur"
          >
          </p>
                  {{ forum.nom_utilisateur }}

<!-- //* Fin nom d'utilisateur *// -->

<!-- // Nom dates -->

            <p
            v-for="forum in forums"
            :data-id="forum.id"
            :key="forum.id"
            v-html="forum.created"
            
          >
          
          </p>
                  {{ forum.created }}


                  

<!-- //* Fin Dates *// -->

          <div class="boutonsAlignement">
            
            <button>Suprimmer</button>

            <button>
              <a :href="`http://localhost:8080/profilUtilisateursForum`">Retour</a>
            </button>

          



              <button class="couleurButton">
                
                <p v-for="forum in forums" :key="forum.id" :data-id="forum.id">
                <a :href="`http://localhost:8080/reponseTitreMessagesUtilisateursForum/${forum.id}`">Répondre</a>
                </p>

              </button>
          </div>

              
            
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

// moment.utc('2019-11-03T05:00:00.000Z').format('MM/DD/YYYY')
// new Date('2015-03-04T00:00:00.000Z'); //Valid Date
// moment().format('MMMM Do YYYY, h:mm:ss a')

var str = '2012-04-11T10:20:30Z';
var date = moment(str);

var dateComponent = date.utc().format('YYYY-MM-DD');
var timeComponent = date.utc().format('HH:mm:ss');
console.log(dateComponent);
console.log(timeComponent);



export default {
  name: "titreMessageForum",

  data() {
    return {
      nom_utilisateur: "",
      email: "",
      mot_de_passe: "",
      avatar: 1,
      show: false,
      mesDonnees: "",
      forums: [],
      counter: 5,
      forum: [],
      content: null,
      discussions: [],
      discussion: [],
      
    };
  },



  components: {},

  //Affiche tout les utilisateur
  mounted() {
    console.log("Steve");
    axios
      .get(`http://localhost:8880/api/forums/${this.$route.params.id}`)
      .then((response) => (this.forums = response.data))

    axios
      .get(`http://localhost:8880/api/discussions/`)
      .then((response) => (this.discussions = response.data));
  },


  

  methods: {
    onFocusOut: function (e) {
      this.content = e.target.innerHTML;
    },
   
  },

  created() {
    
    // let urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams.has('yourParam')); // true
    // console.log(urlParams.get('id')); // "MyParam"
    // return new URL(location.href).searchParams.get("id")
    // console.log();
  },

};
</script>

<style scoped>

@media screen and (max-width:640px){

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
.couleurFond {
  background-image: url("images/yellow.png");
  background-size: 100% auto;
  width: 95%;
  text-align: left;
  padding: 10px;
  border: 1px solid black;
  margin-bottom: 10px;
}

#sujet {
  width: 80%;
}

.boutonsAlignement  {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  

}

p.contenu {
  background-color: rgb(255, 255, 255);
}
.imagesAvatar {
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
h3 {
  background-color: #2cb7f8;
  text-align: center;
  border: solid 1px black;
}
.sujet {
  width: 94%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  text-align: left;
  padding-left: 30px;
  border: solid 1px black;
}
.date {
  font-size: 13px;
}

}

@media screen and (min-width:641px){
.couleurFond {
  background-image: url("images/yellow.png");
  background-size: 100% auto;
  width: 96%;
  text-align: left;
  padding: 10px;
  border: 1px solid black;
}

#sujet {
  width: 80%;
}

p.contenu {
  background-color: rgb(255, 255, 255);
}
.imagesAvatar {
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
h3 {
  background-color: #2cb7f8;
  text-align: center;
  border: solid 1px black;
}
.sujet {
  height: 100%;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border: solid 1px black;
}
.date {
  font-size: 13px;
}
}



</style>