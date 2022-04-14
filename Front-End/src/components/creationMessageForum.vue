<template>
  <div id="app">

     <!-- <h3>
    Vue Trumbowyg demo
  </h3>
  <trumbowyg v-model="content" :config="config" class="editor" @tbw-blur="onBlur"></trumbowyg>
  <pre class="steve">
  {{content}}
  </pre> -->


  <div>
    <trumbowyg v-model="content" :config="config" class="form-control" name="content"></trumbowyg>
  </div>


    </div>
</template>


<script>

  // Import this component
  import Trumbowyg from 'vue-trumbowyg';
  
  // Import editor css
  import 'trumbowyg/dist/ui/trumbowyg.css';

   
  export default {    
    data () {
      return {
        content: null,
        config: {

          
          // Get options from 
          // https://alex-d.github.io/Trumbowyg/documentation
        }       
      }
    },
    components: {
      Trumbowyg
    }
  }

</script>

<style scoped>
.couleurFond {
  background-image: url("images/yellow.png");
  background-size: 100% auto;
  width: 800px;
  text-align: center;
  padding: 10px;
  border: 1px solid black;
}

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
.story {
  width: 760px;
}

body {
  font-family: Verdana, Arial, sans-sarif;
  background: #f8f8f8
}

pre {
  background: #ddd;
  padding: 10px
}
.steve {
  width: 500px;
  height: 500px;
}
</style>
