<template>
  <div id="app">

<div class="imageFond">
<div class="couleurFond">
      <h2>Poster une réponse</h2>

      <form id="idForum" @submit="checkForm" action="https://vuejs.org/" method="post">
       
          <label for="champContenue">Message :</label><br>

         <p class="contenu">


 <quill-editor ref="myTextEditor" id="contenu" v-model:content="contenu" contentType="html" name="contenu" :config="editorOption"></quill-editor>


        </p>

        <p>
          <input type="submit" value="Envoyer" class="Button" />
        </p>
      </form>
      <p v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.contenu }}</p>
    </div>






</div>

    </div>
</template>


<script>

import axios from "axios";

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
   
  export default {    
    data () {
      return {
        sujet: '',
        contenu: '',
        nom_utilisateur: null,
        id_discussion: null,
        likes: null,
        avatar: null,
        errors: [],
        pokemons: [],
        content: null,
        config: {

          
          // Get options from 
          // https://alex-d.github.io/Trumbowyg/documentation
        }       
      }
    },
    components: {
   QuillEditor
    },

    methods: {

                  checkForm: function (e) {
                         
                    console.log('Steve');
                    axios.post('http://localhost:8880/api/forums', {
                      sujet: this.sujet,
                      contenu: this.contenu,
                      nom_utilisateur: "null",
                      id_discussion: "null",
                      likes: "null",
                      avatar: "null"

                      

                    }, {
                      headers: {
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                  
                          }
                    } )

                        
                    
                    e.preventDefault();

                    },
                      }


  }

</script>

<style scoped>



.couleurFond {
  background-color: url("images/yellow.png");
  background-size: 100% auto;
  width: 85%;
  padding-left: 20px;
  padding-right: 20px;
}

#sujet {
  width: 80%;
}

p.contenu {
  background-color: rgb(255, 255, 255);
}



</style>
