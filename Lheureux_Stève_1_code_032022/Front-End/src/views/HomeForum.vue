<template>
<!-- //Module SPA Organisation bloc
     ////////////////////////////// -->

  <logoForum></logoForum>
  <reseauSocialInterneForum></reseauSocialInterneForum>
  <invitationConnexionForum></invitationConnexionForum>

</template>

<script>
// Importation vers les components
// ///////////////////////////////

import logoForum from "../components/logoForum.vue";
import reseauSocialInterneForum from "../components/reseauSocialInterneForum.vue";
import invitationConnexionForum from "../components/invitationConnexionForum.vue";

export default {
    //Components actifs
  ///////////////////
  components: {
    reseauSocialInterneForum,
    logoForum,
    invitationConnexionForum,
  },
};
</script>

<style></style>
