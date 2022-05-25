<template>
  <div id="app">
    <div class="imageFond">
      <div class="couleurFond">
        <h3
          v-for="forum in forums"
          :data-id="forum.id"
          :key="forum.id"
          v-html="forum.sujet"
        ></h3>

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

        <form id="idForum" @submit="checkForm" action="#" method="post">
          <div class="info">
            <img class="imagesAvatar" :src="'/avatars/' + `${avatarProfil}` + '.png'">

            <!-- // Nom d'utilisateur -->

            <p
              v-for="forum in forums"
              :data-id="forum.id"
              :key="forum.id"
              v-html="forum.nom_utilisateur"
            ></p>
            {{ forums.nom_utilisateur }}

            <!-- //* Fin nom d'utilisateur *// -->

            <!-- // Nom dates -->

            <p
              v-for="forum in forums"
              :data-id="forum.id"
              :key="forum.id"
              v-html="forum.created"
            ></p>
            {{ forum.created }}

            <!-- //* Fin Dates *// -->
            <div class="boutonsAlignement">
              <button class="couleurButton">
                <a :href="`/profilUtilisateursForum`"
                  >Retour</a
                >
              </button>

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

      <!-- fin  -->

      <!-- discutions -->

      <div class="discussion">
        <div
          v-for="discussion in discussions"
          :data-id="discussion.id"
          :key="discussion.id"
        >
          <div class="backJaune">
            <div class="fondBlanc">
              <p> {{ discussion.contenu }}</p>
            </div>

            <form id="idForum2">
              <div class="info">
                <img class="imagesAvatar" :src="'/avatars/' + `${discussion.avatar}` + '.png'">

                <!-- // Nom d'utilisateur -->

                {{ discussion.nom_utilisateur }}

                <!-- //* Fin nom d'utilisateur *// -->

                <!-- // Nom dates -->

                <p>
                  {{ discussion.createdDate }}
                </p>

                <form
                  id="idForums"
                  @submit="checkFormSup"
                  action="#"
                  method="get"
                >
                  <p>
                    <input type="submit" value="Suprimmer" class="ButtonSup" />
                  </p>
                </form>

                <!-- //* Fin Dates *// -->
                <!-- <div class="boutonsAlignement">
              <button class="couleurButton">
                <a :href="`http://localhost:8080/profilUtilisateursForum`"
                  >Retour</a
                >
              </button>

              <button>
                <a
                  :href="`http://localhost:8080/reponseTitreMessagesUtilisateursForum/${this.$route.params.id}`"
                  >Répondre</a
                >
              </button>
            </div> -->
              </div>
            </form>
          </div>
        </div>
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

moment("2012-10-14", "YYYY-MM-DD", "fr", true);

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
      .get(
        `/api/forums/${this.$route.params.id}`,

        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )

      .then((response) => (this.forums = response.data));

    axios
      .get(
        `/api/discussions/${this.$route.params.id}`,

        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )

      .then((response) => (this.discussions = response.data.data));
    console.log(sessionStorage.id);
  },

  methods: {
    onFocusOut: function (e) {
      this.content = e.target.innerHTML;
    },

    checkFormSup: function (e) {
      axios.delete(
        `/api/discussions/`,

        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );

      //   .then((response) => (this.avatars = response.data.data));
      // console.log(sessionStorage.id);

      e.preventDefault();
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
    width: 92%;
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
    background-color: #ffeb01;
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
    background-color: #ffeb01;
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
   .imagesAvatar {
    width: 7%;
    height: 7%;
    margin-right: 4px;
    
  }
}
</style>
