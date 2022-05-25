<template>
  <div id="app">

 <form
          id="idForum"
          @submit="avatarForm"
          action="/profilUtilisateursForum"
          method="get"
        >


    <div class="couleurFond">
      <div
        v-for="avatar in avatars"
        :key="avatar.id"
        :data-id="avatar.id"
        
      >
        <div @click="avatarForm">
          <!-- <a :v-model="avatar.id" :href="`${avatar.id}`"> -->
            <img
              
              data-original="${{avatar.id}}"
              v-bind:src="avatar.avatar"
              class="lazy"
              alt=""
              
            />
          <!-- </a> -->
        </div>
      </div>

      <div class="retour">
        <button class="agrandirBouton">
          <a class="retourLien" :href="`/profilUtilisateursForum`">Retour</a>
        </button>
      </div>
    </div>
    </form>

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
      sujet: "",
      contenu: "",
      nom_utilisateur: null,
      id_discussion: null,
      likes: null,
      errors: [],
      pokemons: [],
      content: null,
      avatar_id: null,
     
    };
  },

  //Affiche tout les utilisateur
  mounted() {
    axios
      .get(
        `/api/avatars`,

        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )

      .then((response) => { this.avatars = response.data.data
      
    console.log(response.data.data);
      });
  },

  methods: {




avatarForm: function () {
     
      axios.put(
        `/api/signup/${lectureCookie("id")}`,
        {
          avatar_id: this.avatars.id


          // .then(response => {
            //   this.avatarUser = response.data
          //   console.log("this.avatarUser");
          //   })
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );

            console.log(this.avatar.id);



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



    },
    

  },
};
</script>

<style scoped>
@media screen and (max-width: 640px) {
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
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

  .retour {
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

@media screen and (min-width: 641px) {
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

  .retour {
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
