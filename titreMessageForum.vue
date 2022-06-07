<template>
  <div id="app">
    <div class="couleurFond">
      <h2 class="couleurh2">Messages du Forum Groupomania</h2>
      <button class="couleurButtonMessage">
        <a
          class="couleurLien"
          href="/titreMessagesUtilisateursForum"
          >Publier un message</a
        >
      </button>

      <p v-for="forum in forums.reverse()" :key="forum.id" :data-id="forum.id">
        <span>
          <!-- {{ counter }} -->
        </span>

        <span class="titre"
          ><a
            :href="`/reponseMessagesUtilisateursForum/${forum.id}`"
            >{{ forum.sujet }}</a
          >
        </span>
        <br />

        <span class="reponseStyle"> Réponses : {{ message.length }} </span><br>
        <span class="sousTitre">
          
          <img class="imagesAvatar" :src="'/avatars/' + `${forum.avatar}` + '.png'">
          Speudo : {{ forum.nom_utilisateur }} -
          <br> 
          créer le {{ forum.createdDate }}


          <!-- //Supression messages -->
          <form

            id="checkFormSuprim"
            @submit="checkFormSuprim"
            action="/profilUtilisateursForum"
            method="get"
          >
            <p>
              <input type="submit" value="Suprimmer" class="ButtonSup" />
            </p>
          </form>

          <!-- //Fin -->
        </span>
      </p>

      <div class="directiveMessages">
        <button class="couleurButton" @click="decrement">
          Message précedent
        </button>
        {{ current }}
        <button class="couleurButton" @click="increment">
          Messages suivant
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";


var date = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(date.toString());
// moment().toISOString()



export default {
  name: "titreMessageForum",

  data() {
    return {
      nom_utilisateur: "",
      email: "",
      mot_de_passe: "",
      avatar: 1,
      forums: [],
      forum: [],
      user: [],
      users: [],
      counter: 1,
      current: 30,
      total: 0,
      message: [],
      length: "",
     
    };
  },

  //Affiche tout les utilisateur
  mounted() {

    axios
      .get(
        `/api/user/${lectureCookie("id")}`,

        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )

      .then((response) => {
        this.avatarProfil = response.data.data.avatar_id
        
    console.log(this.avatarProfil);
        });


// Cookie /////////////////////////////////////
////////////////////////////////////////////////

/* Définition de la fonction JavaScript de lecture d'un cookie */ 
function lectureCookie(id) 
{ 
    /* Test de présence du cookie */ 
    if (document.cookie.length == 0) 
    { 
        /* Valeur de retour null */ 
        return null; 
    } 
    else 
    { 
        /* Mise en tableau tabElements des éléments du cookie */ 
        /* NB : On se base sur le séparateur point-virgule */ 
        var tabElements = document.cookie.split(";"); 
        /* Recherche du = séparant le nom de l'élément 
        de la valeur de l'élément pour le 1er élément (n° 0)*/ 
        var positionEgal=tabElements[0].indexOf("=", 0); 
        var nomElement=tabElements[0].substring(0, positionEgal);
        var valeurElement=tabElements[0].substring(positionEgal+1);
        if(nomElement == id)
        {
          return unescape(valeurElement);
        }

        return null;
    }}

    // if (lectureCookie("id") !== null)
    //   {
    //     // document.write(lectureCookie("id"))
        
       
    //   }
    //   else {
    //     document.write("Id non valide!")
    //   }




// FIN -----------------------








    axios
      .get(
        "/api/forums?limit=20",

        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )

      .then((response) => {
        this.forums = response.data.data

    console.log(response.data.data);

        });


        //message Total
      axios
      .get(
        `/api/discussions/2`,

        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )

      .then((response) => { 
        this.message = response.data.data
         console.log(response.data.data);
        });
   


  },

  methods: {
    checkFormSuprim: function () {
      axios.delete(
        `/api/forums/`,

        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );
    },

    // Click
    increment() {
      this.current++;
      console.log(this.counter);
    },
    decrement() {
      this.current--;
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 640px) {
  .couleurFond {
    background-image: url("images/yellow.png");
    background-size: 100% auto;
    width: 95%;
    text-align: center;
    padding: 10px;
    border: 1px solid black;
    margin-bottom: 10px;
  }

  .texteGauche {
    text-align: left;
    width: 100%;
  }

  .largeurChamp {
    width: 95%;
  }

  .couleurLien {
    color: white;
    text-decoration: none;
  }

  .directiveMessages {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 5%;
  }

  .couleurButtonMessage {
    background-color: #4600d1;
    border-radius: 2px;
    color: white;
    font-size: 13px;
    width: 180px;
    height: 30px;
    margin-bottom: 8px;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
    text-align: center;
  }

  .couleurh2 {
    background-color: rgb(255, 255, 255);
    border: solid 1px black;
  }
  .sousTitre {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    justify-content: center;
    align-items: center;
  }
  .titre {
    font-size: 18px;
    font-weight: 600;
  }

  .ButtonSup {
    width: 60px;
    font-size: 8px;
    background-color: rgba(255, 255, 255, 0);
    margin-left: 5px;
  }
    .reponseStyle {
    font-weight: bold;
  }
  .imagesAvatar {
    width: 9%;
    height: 9%;
    margin-right: 4px;
  }
}

@media screen and (min-width: 641px) {
  .couleurFond {
    background-image: url("images/yellow.png");
    background-size: 100% auto;
    width: 96%;
    text-align: center;
    padding: 10px;
    border: 1px solid black;
    margin-bottom: 10px;
  }

  .ButtonSup {
    width: 60px;
    font-size: 8px;
    background-color: rgba(255, 255, 255, 0);
    margin-left: 5px;
  }

  .texteGauche {
    text-align: left;
    width: 100%;
  }

  .largeurChamp {
    width: 95%;
  }

  .couleurLien {
    color: white;
    text-decoration: none;
  }

  .couleurButtonMessage {
    background-color: #4600d1;
    border-radius: 2px;
    color: white;
    font-size: 13px;
    width: 180px;
    height: 30px;
    margin-bottom: 8px;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
    text-align: center;
  }

  .couleurh2 {
    background-color: rgb(255, 255, 255);
    border: solid 1px black;
  }
  .sousTitre {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    justify-content: center;
    align-items: center;
  }
  .titre {
    font-size: 18px;
    font-weight: 600;
  }

  .directiveMessages {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 5%;
  }
  .reponseStyle {
    font-weight: bold;
  }
  .imagesAvatar {
    width: 7%;
    height: 7%;
    margin-right: 4px;
    
  }
}
</style>
