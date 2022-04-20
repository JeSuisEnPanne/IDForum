<template>
    <logoForum></logoForum>
    <invitationConnexionForum></invitationConnexionForum>
    <reseauSocialInterneForum></reseauSocialInterneForum>
    <titreGrandForum></titreGrandForum>
    <InscriptionForum></InscriptionForum>
    <loginForum></loginForum>
    <loginModifForum></loginModifForum>
    <titreMessageForum></titreMessageForum>
    <avatarForum></avatarForum>
    <creationMessageTexteForum></creationMessageTexteForum>
</template>

<script>
import InscriptionForum from './components/InscriptionForum.vue'
import loginForum from './components/loginForum.vue'
import loginModifForum from './components/loginModifForum.vue'
import titreMessageForum from './components/titreMessageForum.vue'
import avatarForum from './components/avatarForum.vue'
import logoForum from './components/logoForum.vue'
import invitationConnexionForum from './components/invitationConnexionForum.vue'
import reseauSocialInterneForum from './components/reseauSocialInterneForum.vue'
import titreGrandForum from './components/titreGrandForum.vue'
import creationMessageTexteForum from './components/creationMessageTexteForum.vue'


export default {
  name: 'App',
  components: {
    InscriptionForum,
    loginForum,
    loginModifForum,
    titreMessageForum,
    avatarForum,
    logoForum,
    invitationConnexionForum,
    reseauSocialInterneForum,
    titreGrandForum,
    creationMessageTexteForum
    
  }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
</style>
