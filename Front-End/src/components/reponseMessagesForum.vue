<template>
  <div id="app">

     <!-- //Mise en page imageFond -->
    <div class="imageFond">
      <div class="couleurFond">

        <!-- //Boucle for pour les sujets des messages -->
        <h3
          v-for="forum in forums"
          :data-id="forum.id"
          :key="forum.id"
          v-html="forum.sujet"
        ></h3>

        <!-- //Boucle for pour le contenue des messages -->
        <div class="sujet">
          <p
            class="largeurImages"
            v-for="forum in forums"
            :data-id="forum.id"
            :key="forum.id"
            v-html="forum.contenu"
          ></p>
          {{ forum.contenu }}
        </div>

        <!-- // Formulaire et boucle for pour afficher les avatars -->
        <form id="idForum" @submit="checkForm" action="#" method="post">
          <div class="info">

           
            <p v-for="forum in forums" :data-id="forum.id" :key="forum.avatar">

              <img
                class="imagesAvatar"
                :src="'/avatars/' + `${forum.avatar}` + '.png'"
              />

            </p>
            
            
            <!-- //Boucle for pour afficher les nom utilisateurs -->
            <p
              v-for="forum in forums"
              :data-id="forum.id"
              :key="forum.id"
              v-html="forum.nom_utilisateur"
            ></p>
            {{ forums.nom_utilisateur }}

           

            <!-- //Boucle for pour afficher la date des messages -->

            <p
              v-for="forum in forums"
              :data-id="forum.id"
              :key="forum.id"
              v-html="forum.createdDate"
            ></p>
            {{ forum.createdDate }}

            
            <!-- //Bouton retour -->
            <div class="boutonsAlignement">
              <button class="couleurButton">
                <a :href="`/profilUtilisateursForum`">Retour</a>
              </button>

            <!-- //Bouton Répondre -->
              <button>
                <a
                  :href="`/reponseTitreMessagesUtilisateursForum/${this.$route.params.id}`"
                  >Répondre</a
                >
              </button>
            </div>
          </div>
        </form>
      </div>

      <!-- /// FIN ///  -->


      <!-- //Réponse des messages du forum -->

      <!-- // Boucle for pour lister les discussion -->
      <div class="discussion">
        <div
          v-for="discussion in discussions"
          :data-id="discussion.id"
          :key="discussion.id"
        >
          <div class="backJaune">
            <div class="fondBlanc">

              <!-- //Affichage du contenu discussion -->
              <p v-html="`${discussion.contenu}`"></p>
            </div>

            <!-- //Affichage du contenu avatar -->
            <form id="idForum2">
              <div class="info">
                <img
                  class="imagesAvatar"
                  :src="'/avatars/' + `${discussion.avatar}` + '.png'"
                />

                <!-- //Affichage des noms utilisateur -->

                {{ discussion.nom_utilisateur }}

                <!-- //Affichage des dates pour les messages -->

                <p>
                  {{ discussion.createdDate }}
                </p>

                <!-- //Formulaire pour supprimer une discussion -->
                <form
                  id="idForums"
                  @submit="checkFormSup"
                  action="#"
                  method="get"
                >

                <!-- //Bouton suprimmer -->
                  <p>
                    <input type="submit" value="Suprimmer" class="ButtonSup" />
                  </p>
                </form>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

//Appel a Axios pour l'API
import axios from "axios";

//Appel a moment pour les dates
import moment from "moment";

//Moment format dates
moment("2012-10-14", "YYYY-MM-DD", "fr", true);

export default {

  //Nom du components
  name: "titreMessageForum",

  //Déclaration des variables 
  data() {
    return {
      nom_utilisateur: "",
      email: "",
      mot_de_passe: "",
      avatar: 1,
      forums: [],
      forum: [],
      content: null,
      discussions: [],
      discussion: [],
    };
  },


  mounted() {

    //Appel a l'API Back-End pour recuperer ID des messages
    axios
      .get(
        `/api/forums/${this.$route.params.id}`,

        // Récupère le token
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )

      // Retourne une promesse nommée forums
      .then((response) => (this.forums = response.data));


    //Appel a l'API Back-End pour recuperer ID des messages de discussion
    axios
      .get(
        `/api/discussions/${this.$route.params.id}`,

        // Récupère le token
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )

      // Retourne une promesse nommée discussions
      .then((response) => (this.discussions = response.data.data));

  },

  methods: {

    //Appel du formulaire checkFormSup pour supprimer une discussion
    checkFormSup: function (e) {
      axios.delete(
        `/api/discussions/`,

        // Récupère le token
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );

      //Previent du comportement par default
      e.preventDefault();
    },
  },
};


</script>


<style scoped>

/* //////////////// media queries ///////////////
////////////////// Portable ///////////////// */

@media screen and (max-width: 640px) {
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

  .boutonsAlignement {
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

  .ButtonSup {
    width: 60px;
    font-size: 8px;
    background-color: rgba(255, 255, 255, 0);
    margin-left: 5px;
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
    width: 87.5%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
    border: solid 1px black;
  }
  .date {
    font-size: 13px;
  }
  .largeurImages {
    max-width: 100%;
    overflow: auto;
    text-align: justify;
    word-wrap: break-word;
  }
  a:link,
  a:visited {
    text-decoration: none;
    color: black;
  }

  .discussion {
    background-color: rgba(0, 0, 0, 0);
    margin-right: 2%;
  }
  .backJaune {
    border: solid 1px black;
    margin-top: 10px;
    width: 102%;
    background-color: #bbd9ff;
  }
  .fondBlanc {
    border: solid 1px black;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color: white;
    max-width: 100%;
    overflow: auto;
    text-align: justify;
    word-wrap: break-word;
  }
  .contenuInfos {
    margin-left: 20px;
  }

}

/* //////////////// media queries ///////////////
////////////////// PC et Tablet ///////////////// */


@media screen and (min-width: 641px) {
  .couleurFond {
    background-image: url("images/yellow.png");
    background-size: 100% auto;
    width: 96%;
    text-align: left;
    padding: 10px;
    border: 1px solid black;
  }

  .boutonsAlignement {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-left: 10%;
  }

  #sujet {
    width: 80%;
  }

  .couleurButton {
    margin-right: 10px;
  }

  a:link,
  a:visited {
    text-decoration: none;
    color: black;
  }

  .ButtonSup {
    width: 60px;
    font-size: 8px;
    background-color: rgba(255, 255, 255, 0);
    margin-left: 5px;
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
    padding-left: 20px;
    padding-right: 20px;
  }
  .date {
    font-size: 13px;
  }
  .largeurImages {
    max-width: 100%;
    overflow: auto;
    text-align: justify;
    word-wrap: break-word;
  }
  .discussion {
    background-color: rgba(0, 0, 0, 0);
    margin-right: 2%;
  }
  .backJaune {
    border: solid 1px black;
    margin-top: 10px;
    background-color: #bbd9ff;
  }
  .fondBlanc {
    border: solid 1px black;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color: white;
    max-width: 100%;
    overflow: auto;
    text-align: justify;
    word-wrap: break-word;
  }
  .contenuInfos {
    margin-left: 20px;
  }

}
</style>
