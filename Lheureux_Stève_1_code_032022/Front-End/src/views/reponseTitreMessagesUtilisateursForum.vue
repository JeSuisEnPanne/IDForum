<template>

<!-- //Module SPA Organisation bloc
     ////////////////////////////// -->
  <div class="colonne">
    <div>
      <logoForum></logoForum>
      <reseauSocialInterneForum></reseauSocialInterneForum>
      <loginModifForum></loginModifForum>
    </div>

    <div class="messages">
      <creationMessageReponseForum></creationMessageReponseForum>
      <reponseMessagesForum></reponseMessagesForum>
    </div>
  </div>
</template>


<script>

// Importation vers les components
// ///////////////////////////////
import logoForum from "../components/logoForum.vue";
import reseauSocialInterneForum from "../components/reseauSocialInterneForum.vue";
import loginModifForum from "../components/loginModifForum.vue";
import reponseMessagesForum from "../components/reponseMessagesForum.vue";
import creationMessageReponseForum from "../components/creationMessageReponseForum.vue";

export default {

  //Components actifs
  ///////////////////
  components: {
    loginModifForum,
    reponseMessagesForum,
    reseauSocialInterneForum,
    logoForum,
    creationMessageReponseForum,
  },
};
</script>

<style scoped>

/* //////////////// media queries ///////////////
////////////////// Portable ///////////////// */

@media screen and (max-width: 640px) {
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
  .colonne {
    display: flex;
    flex-direction: column;
  }
  .messages {
    width: 100%;
  }
}

/* //////////////// media queries ///////////////
////////////////// PC et Tablet ///////////////// */

@media screen and (min-width: 641px) {
  .colonne {
    display: flex;
    flex-direction: row;
  }
  .messages {
    width: 96%;
    margin-left: 10px;
  }
}
</style>
