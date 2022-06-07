<template>

<!-- //Module SPA Organisation bloc
     ////////////////////////////// -->
  <logoForum></logoForum>
  <reseauSocialInterneForum></reseauSocialInterneForum>
  <invitationConnexionForum></invitationConnexionForum>
  <loginForum></loginForum>
</template>

<script>

// Importation vers les components
// ///////////////////////////////
import logoForum from "../components/logoForum.vue";
import reseauSocialInterneForum from "../components/reseauSocialInterneForum.vue";
import loginForum from "../components/loginForum.vue";
import invitationConnexionForum from "../components/invitationConnexionForum.vue";

export default {

    //Components actifs
  ///////////////////
  components: {
    loginForum,
    reseauSocialInterneForum,
    logoForum,
    invitationConnexionForum,
  },
};

</script>

<style></style>
