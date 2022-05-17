<template>
  <div id="app">
    <div class="imageFond">
      <div class="couleurFond">
        <h2>Poster une réponse</h2>

        <form id="idForum" @submit="checkForm" action="" method="get">
          <label for="champContenue">Message :</label><br />

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

          <div class="retour">
            <button class="agrandirBouton">
              <a
                class="retourLien"
                :href="`http://localhost:8080/reponseMessagesUtilisateursForum/${this.$route.params.id}`"
                >Retour</a
              >
            </button>

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
import axios from "axios";

import Editor from "@tinymce/tinymce-vue";

export default {
  data() {
    return {
      sujet: "",
      contenu: "",
      nom_utilisateur: "",
      id_discussion: null,
      likes: null,
      avatar: null,
      errors: [],
      pokemons: [],
      content: null,
      foobar: null,
      config: {
        // Get options from
        // https://alex-d.github.io/Trumbowyg/documentation
      },
    };
  },
  components: {
    editor: Editor,
  },

  submit() {
    //if you want to send any data into server before redirection then you can do it here
    this.$router.Push("http://google.fr");
  },

  mounted() {
    axios
      .get(
        `/api/user/${sessionStorage.id}`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        },
        sessionStorage.getItem("id")
      )

      .then((response) => (this.user = response.data.data));
    console.log(sessionStorage.id);
  },

  methods: {
    checkForm: function (e) {
      console.log("Steve");

      axios.post(
        `http://localhost:8880/api/discussions/${this.$route.params.id}`,

        {
          sujet: this.sujet,
          contenu: this.contenu,
          data: "null",
          nom_utilisateur: this.user.pseudo,
          id_discussion: "null",
          likes: "null",
          avatar: "null",
        },

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );

      window.location.href = `/reponseMessagesUtilisateursForum/${this.$route.params.id}`;
      e.preventDefault();
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
