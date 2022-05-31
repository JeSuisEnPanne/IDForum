<template>

  <div class="colonne">

<!-- //Module SPA Organisation bloc
     ////////////////////////////// -->

    <div>
      <logoForum></logoForum>
      <reseauSocialInterneForum></reseauSocialInterneForum>
      <loginModifForum></loginModifForum>
      <avatarForum></avatarForum>
    </div>

    <div class="messages">
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
import avatarForum from "../components/avatarForum.vue";
import titreMessageForum from "../components/titreMessageForum.vue";



export default {

  //Components actifs
  ///////////////////
  components: {
    loginModifForum,
    avatarForum,
    reseauSocialInterneForum,
    logoForum,
    titreMessageForum,
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
