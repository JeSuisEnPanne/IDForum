<template>

<!-- //Module SPA Organisation bloc
     ////////////////////////////// -->

  <logoForum></logoForum>
  <reseauSocialInterneForum></reseauSocialInterneForum>
  <invitationConnexionForum></invitationConnexionForum>
  <InscriptionForum></InscriptionForum>

</template>


<script>

// Importation vers les components
// ///////////////////////////////

import logoForum from "../components/logoForum.vue";
import reseauSocialInterneForum from "../components/reseauSocialInterneForum.vue";
import InscriptionForum from "../components/InscriptionForum.vue";
import invitationConnexionForum from "../components/invitationConnexionForum.vue";

export default {
  components: {

      //Components actifs
      ///////////////////

    InscriptionForum,
    reseauSocialInterneForum,
    logoForum,
    invitationConnexionForum,
  },
};

</script>

<style></style>
