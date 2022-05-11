<template>
  <div id="app">
    <div class="imageFond">
      <div class="couleurFond">
        <h2>Poster un message</h2>

        <form
          id="idForum"
          @submit="checkForm"
          action="http://localhost:8080/profilUtilisateursForum"
          method="get"
        >
          <p class="texteGauche">
            <label for="sujet">Titre :</label><br /><br />

            <input id="sujet" type="text" name="sujet" v-model="sujet" />
          </p>

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
                images_upload_url: 'http://localhost:8880/api/images/',

                images_reuse_filename: false,
                file_picker_types: 'file image media',
                images_upload_base_path: './images',
                plugins:
                  'language, image, print, media, emoticons, link, preview, fullscreen, code, image_list',
              }"
            ></editor>
          </p>

          <div class="retour">
            <p>
              <input type="submit" value="Envoyer" class="Button" />
            </p>

            <button class="agrandirBouton">
                <a class="retourLien" :href="`http://localhost:8080/profilUtilisateursForum`">Retour</a>
            </button>
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
      nom_utilisateur: "this.users",
      id_discussion: null,
      likes: null,
      avatar: null,
      content: null,
      name: "app",
      editorOption: {},
      Editor: "",
    };
  },
  components: {
    editor: Editor,
  },

  methods: {
    checkForm: function () {
      console.log("Steve");
      axios.post(
        "http://localhost:8880/api/forums",
        {
          sujet: this.sujet,
          contenu: this.contenu,
          data: "null",
          nom_utilisateur: this.nom_utilisateur,
          id_discussion: "null",
          likes: "null",
          avatar: "null",

          // .then(response => (this.pokemons = response.data.data))
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );
     

 
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

.retour {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
}

}

/* Tablet */
@media screen and (min-width:641px){

.retour {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
}

.couleurFond {
  background-image: url("images/yellow.png");
  background-size: 100% auto;
  width: 96%;
  text-align: left;
  padding: 10px;
  border: 1px solid black;
  margin-bottom: 10px;
}

#sujet {
  width: 80%;
}

p.contenu {
  background-color: rgb(147, 13, 13);
}

}




</style>