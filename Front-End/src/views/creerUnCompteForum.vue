<template>
  
  <h1>Bienvenue</h1>

  <logoForum></logoForum>
  <reseauSocialInterneForum></reseauSocialInterneForum>
  <invitationConnexionForum></invitationConnexionForum>
  <InscriptionForum></InscriptionForum>

</template>


<script>

import logoForum from '../components/logoForum.vue'
import reseauSocialInterneForum from '../components/reseauSocialInterneForum.vue'
import InscriptionForum from '../components/InscriptionForum.vue'
import invitationConnexionForum from '../components/invitationConnexionForum.vue'


export default {



  components: {

    InscriptionForum,
    
    reseauSocialInterneForum,
    logoForum,
    invitationConnexionForum,

  }


}
</script>

<style>

</style>