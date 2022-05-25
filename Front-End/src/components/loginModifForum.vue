<template>
  <div id="app">
    <div class="couleurFond">
      <h2>Profil</h2>

      <div class="profilAlignement">

        <!-- <img class="imagesAvatar" src="https://i.ibb.co/MG8qZFg/6.png" /> -->
       
       
       
       <div>
                    <!-- <img class="imagesAvatar" :src="`../assets/avatars/${profils}.png`"/> -->

            
<!-- <img class="imagesAvatar" :src="`../assets/avatars/${profils}.png`"/> -->


         
<img class="imagesAvatar" :src="'/avatars/' + `${profils}` + '.png'">

        </div>


 
      
       
       
       
       
        <div class="profilAlignementTexte">
          <p>Pseudo : {{ profil.pseudo }}</p>
          <p>Email : {{ profil.email }}</p>
        </div>
      </div>

      <div class="ButtonAvatar, alignementBoutons">
        <button>
          <a
            class="sansLien"
            href="/avatarsProfilUtilisateursForum"
            >Changer Avatar</a
          >
        </button>

        <form
          id="idForum"
          @submit="checkForm"
          action="/"
          method="get"
        >
          <input type="submit" value="Suprimmer Compte" class="Button" />
        </form>

        <form
          id="idForum"
          @submit="checkDeconnexion"
          action="/"
          method="get"
        >
          <input type="submit" value="Déconnexion" class="Button" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "loginModifForum",
  data() {
    return {
      profils: [],
      profil: [],
      stop: null,
      avatar: [],
      avatars: [],
      authenticated: false,
      image: "../assets/avatars/",
      png: ".png",
    };
  },
  // Affiche un utilisateur dans le profil
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
      
    console.log(response.data.data[0].avatar);
      });
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
        this.profil = response.data.data
        
    console.log(this.profil);
        });
        //////////////// TEST
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
        this.profils = response.data.data.avatar_id
        
    console.log(this.profils);
        });
        //////////////FIN
    // alert( sessionStorage.getItem('id') )
    // window.location.href = "http://localhost:8080/profilUtilisateursForum/"
    // this.$router.push('/profilUtilisateursForum');
    // e.preventDefault();
    // console.log(sessionStorage.token);
    // window.setTimeout(function(){location.reload()},3000)
    //  clearTimeout();
    // this.$router.push(window.location.reload());
    // this.$router.push(window.location.reload());
    // this.$router.go()
    // document.location.reload();
  },
  ///// Supression compte
  methods: {
   
    getCookie(){
            // it gets the cookie called `username`
          const username = this.$cookies.get("id");
          console.log(username);
        },
    checkForm: function (e) {
      if (
        window.confirm("Suprimer votre compte utilisateur : Oui ou Annuler ?")
      ) {
        console.log("Steve");
        axios.delete(
          `/api/compte/${lectureCookie("id")}`,
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
      }
      e.preventDefault();
      this.$router.go();
    },
    /////////////////////////////////////
    checkDeconnexion: function () {
      if (window.confirm("Voulez-vous vous déconnecter : Oui ou Annuler ?")) {
        axios.get(
          `/api/compte/${lectureCookie("id")}`,
         
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": sessionStorage.clear(),
            },
          }
        );
      }
      this.$router.go();
    },
    
  },
};
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
console.log(lectureCookie("id"));
// FIN -----------------------
</script>

<style scoped>
/* Mobile */
@media screen and (max-width: 640px) {
  .couleurFond {
    background-image: url("images/yellow.png");
    background-size: 100% auto;
    width: 95%;
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
  .alignementBoutons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 5%;
  }
  .profilAlignement {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .profilAlignementTexte {
    display: flex;
    flex-direction: column;
  }
  .imagesAvatar {
    margin-top: -20px;
    width: 110px;
  }
  a:link,
  a:visited {
    text-decoration: none;
    color: black;
  }
  h2 {
    text-align: center;
  }
}
/* Tablet */
@media screen and (min-width: 641px) {
  .couleurFond {
    background-image: url("images/yellow.png");
    background-size: 100% auto;
    width: 200px;
    text-align: center;
    padding: 10px;
    border: 1px solid black;
  }
  a:link,
  a:visited {
    text-decoration: none;
    color: black;
  }
  .texteGauche {
    text-align: left;
    width: 100%;
  }
  .ButtonAvatar {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 5%;
  }
  .sansLien {
    text-decoration: none;
    color: black;
  }
  .Button {
    text-align: center;
    width: 100%;
    margin-top: 10px;
  }
  .alignementBoutons {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    margin-top: 5%;
  }
  .largeurChamp {
    width: 95%;
  }
  .imagesAvatar {
    margin-top: -20px;
    width: 130px;
  }
}
</style>