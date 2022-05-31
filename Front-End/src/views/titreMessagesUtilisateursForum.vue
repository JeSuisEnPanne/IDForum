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
      <creationMessageTexteForum></creationMessageTexteForum>
      <titreMessageForum></titreMessageForum>
    </div>
  </div>
</template>

<script>

// Importation vers les components
// ///////////////////////////////
import logoForum from "../components/logoForum.vue";
import reseauSocialInterneForum from "../components/reseauSocialInterneForum.vue";
import loginModifForum from "../components/loginModifForum.vue";
import titreMessageForum from "../components/titreMessageForum.vue";
import creationMessageTexteForum from "../components/creationMessageTexteForum.vue";


export default {

  //Components actifs
  ///////////////////
  components: {
    loginModifForum,
    titreMessageForum,
    reseauSocialInterneForum,
    logoForum,
    creationMessageTexteForum,
  },
};

</script>

<style scoped>

/* //////////////// media queries ///////////////
////////////////// Portable ///////////////// */

@media screen and (max-width: 640px) {
  .colonne {
    display: flex;
    flex-direction: column;
  }
  .messages {
    width: 100%;
    margin-left: 2px;
    margin-right: 2px;
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
