<template>
  <div id="app">
    <div class="couleurFond">


      <h2>Profil</h2>

        <div class="profilAlignement">

          <img class="imagesAvatar" src="https://i.ibb.co/MG8qZFg/6.png" />
            <div class="profilAlignementTexte">
                <p>Pseudo : {{ profil.pseudo }}</p>
                <p>Email : {{ profil.email }}</p>
            </div>
        </div>

        <div class="ButtonAvatar, alignementBoutons">

          <button>
            <a class="sansLien" href="http://localhost:8080/avatarsProfilUtilisateursForum"
              >Changer Avatar</a
            >
          </button>

          <form id="idForum" @submit="checkForm" action="http://localhost:8080/" method="get">
            <input type="submit" value="Suprimmer Compte" class="Button" />
          </form>

          <form id="idForum" @submit="checkDeconnexion" action="http://localhost:8080/" method="get">
            
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
    };
  },

  // Affiche un utilisateur dans le profil
  mounted() {
    axios
      .get(
        `http://localhost:8880/api/user/${sessionStorage.id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: sessionStorage.getItem("id"),
          },
        }
      )

      .then((response) => (this.profil = response.data.data));
    console.log(sessionStorage.id);
    // console.log(sessionStorage.token);

    // window.setTimeout(function(){location.reload()},3000)
    // clearTimeout();
  },

  ///// Supression compte

  methods: {
    checkForm: function (e) {
      if (
        window.confirm("Suprimer votre compte utilisateur : Oui ou Annuler ?")
      ) {
        console.log("Steve");
        axios.delete(
          `http://localhost:8880/api/compte/${sessionStorage.id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: sessionStorage.getItem("id"),
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
          `http://localhost:8880/api/compte/${sessionStorage.id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: sessionStorage.removeItem("token"),
              // token
            },
          }
        );
      }

     
      this.$router.go();
    },
  },
};
</script>

<style scoped>

/* Mobile */
@media screen and (max-width:640px){
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

h2 {
  text-align: center;
}

}

/* Tablet */
@media screen and (min-width:641px){
.couleurFond {
  background-image: url("images/yellow.png");
  background-size: 100% auto;
  width: 200px;
  text-align: center;
  padding: 10px;
  border: 1px solid black;
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
text-decoration:none; 
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
