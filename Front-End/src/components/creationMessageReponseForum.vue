<template>
  <div id="app">

    <!-- //Mise en page imageFond -->
    <div class="imageFond">
      <div class="couleurFond">

        <h2>Poster une réponse</h2>

        <!-- //Formulaire avec bouton d'envoie "checkForm" -->
        <form id="idForum" @submit="checkForm" action="" method="get">
          <label for="champContenue">Message :</label><br />

          <!-- //Tiny Rich Text Editeur
          //////////////////////// -->

          <p class="contenu">
            <editor
              id="tinymce"
              v-model="contenu"
              :init="{
                file_picker_types: 'file image media',
                images_file_types: 'jpg,svg,webp,jpeg,gif,png',

                language: 'fr_FR',
                toolbar:
                  'code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
                         styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
                         table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen',
                menubar: true,
                toolbar: false,

                //upload
                automatic_uploads: false,
                images_upload_url: '/api/images/',

                images_reuse_filename: false,
                file_picker_types: 'file image media',
                images_upload_base_path: './images',
                plugins:
                  'language, image, print, media, emoticons, link, preview, fullscreen, code, image_list',
              }"
            ></editor>
          </p>

          <!-- //Tiny FIN /////////////
          //////////////////////// -->

          <!-- //Bouton retour -->
          <div class="retour">
            <button class="agrandirBouton">
              <a
                class="retourLien"
                :href="`/reponseMessagesUtilisateursForum/${this.$route.params.id}`"
                >Retour</a
              >
            </button>

            <!-- //Bouton Envoyer Formulaire -->
            <p>
              <input type="submit" value="Envoyer" class="Button" />
            </p>

          </div>
        </form>

      </div>
    </div>
  </div>

</template>

<script>

//Appel a Axios pour l'API
import axios from "axios";

//Appel a Tiny pour rich text éditeur
import Editor from "@tinymce/tinymce-vue";

//Appel a moment pour les dates
import moment from "moment";

// Format Date avec moment
var date = moment().format("YYYY-MM-DD HH:mm:ss");
console.log(date.toString());

export default {

  //Déclaration des variables
  data() {

    return {
      sujet: "",
      contenu: "",
      nom_utilisateur: "",
      id_discussion: null,
      likes: null,
      avatar: null,
      errors: [],
      content: null,
      foobar: null,
      date: moment().format("YYYY-MM-DD HH:mm:ss"),
  
    };
  },


  components: {

    //components pour Tiny - rich text éditeur
    editor: Editor,

  },


  mounted() {

    //Appel a l'API Back-End recupere ID de l'utilisateur dans le middleware get user
    axios
      .get(
        `/api/user/${lectureCookie("id")}`,

        // Récupère le token
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        },
       
      )

      // Retourne une promesse nommée user
      .then((response) => (this.user = response.data.data));
   

      /////////////////// Cookie /////////////////////
      ////////////////////////////////////////////////

    /* Définition de la fonction JavaScript de lecture d'un cookie */
    function lectureCookie(id) {
      /* Test de présence du cookie */
      if (document.cookie.length == 0) {
        /* Valeur de retour null */
        return null;
      } else {
        /* Mise en tableau tabElements des éléments du cookie */
        /* NB : On se base sur le séparateur point-virgule */
        var tabElements = document.cookie.split(";");
        /* Recherche du = séparant le nom de l'élément 
        de la valeur de l'élément pour le 1er élément (n° 0)*/
        var positionEgal = tabElements[0].indexOf("=", 0);
        var nomElement = tabElements[0].substring(0, positionEgal);
        var valeurElement = tabElements[0].substring(positionEgal + 1);
        if (nomElement == id) {
          return unescape(valeurElement);
        }

        return null;
      }
    }
      ///////////////////// FIN ////////////////////////////
      /////////////////////////////////////////////////////

  },



  methods: {

    //Appel du formulaire checkForm
    checkForm: function (e) {
      
      // API post pour poster des réponses au méssages
      axios.post(
        `/api/discussions/${this.$route.params.id}`,

        {
          sujet: this.sujet,
          contenu: this.contenu,
          data: "null",
          nom_utilisateur: this.user.pseudo,
          id_discussion: "null",
          likes: "null",
          avatar: this.user.avatar_id,
          createdDate: this.date.toString(),
        },

        // Récupère le token
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );

      //renvoie l'URL de la page en cours
      window.location.href = `/reponseMessagesUtilisateursForum/${this.$route.params.id}`;
      
      // Suppression du comportement par défaut
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

  .retour {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  p.contenu {
    background-color: rgb(255, 255, 255);
  }

  a:link,
  a:visited {
    text-decoration: none;
    color: black;
  }
}

/* //////////////// media queries ///////////////
////////////////// PC et Tablet ///////////////// */

@media screen and (min-width: 641px) {
  .couleurFond {
    background-image: url("images/yellow.png");
    background-size: 100% auto;
    width: 95%;
    text-align: left;
    padding: 10px;
    border: 1px solid black;
    margin-bottom: 10px;
  }

  .retour {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  a:link,
  a:visited {
    text-decoration: none;
    color: black;
  }

  #sujet {
    width: 80%;
  }

  p.contenu {
    background-color: rgb(255, 255, 255);
  }
}
</style>
