<template>

    <nav>
      <!-- <router-link to="/">Accueil</router-link>
      <router-link to="/creerUnCompteForum">Creer Un Compte</router-link>
      <router-link to="/loginUnCompteForum">Se Loguer</router-link>
      <router-link to="/profilUtilisateursForum">Profil Utilisateurs</router-link>
      <router-link to="/avatarsProfilUtilisateursForum">Profil Utilisateurs Avatars</router-link>
      <router-link to="/titreMessagesUtilisateursForum">Titre messages utilisateur</router-link>
      <router-link to="/reponseMessagesUtilisateursForum">Reponses messages utilisateur</router-link>
      <router-link to="/reponseTitreMessagesUtilisateursForum">Reponses repondre messages utilisateur</router-link>
      <router-link to="/likeSystemForum">Like System</router-link>
      <router-link :to="{name: 'Product', params : {name: 'Skate'}}">Produit 1</router-link>
      <router-link :to="{name: 'Product', params : {name: 'Trotinette'}}">Produit 2</router-link>
      <button @click="showProduct('Roller')">Produit 3</button> -->
    
    </nav>
    <router-view></router-view>
    
    <!-- <logoForum></logoForum>
    <invitationConnexionForum></invitationConnexionForum>
    <reseauSocialInterneForum></reseauSocialInterneForum>
    <titreGrandForum></titreGrandForum>
    <InscriptionForum></InscriptionForum>
    <loginForum></loginForum>
    <loginModifForum></loginModifForum>
    <titreMessageForum></titreMessageForum>
    <avatarForum></avatarForum>
    <creationMessageTexteForum></creationMessageTexteForum>
    <creationMessageReponseForum></creationMessageReponseForum>
    <reponseMessagesTitreForum></reponseMessagesTitreForum>
    <reponseMessagesForum></reponseMessagesForum> -->


</template>

<script>
// import InscriptionForum from './components/InscriptionForum.vue'
// import loginForum from './components/loginForum.vue'
// import loginModifForum from './components/loginModifForum.vue'
// import titreMessageForum from './components/titreMessageForum.vue'
// import avatarForum from './components/avatarForum.vue'
// import logoForum from './components/logoForum.vue'
// import invitationConnexionForum from './components/invitationConnexionForum.vue'
// import reseauSocialInterneForum from './components/reseauSocialInterneForum.vue'
// import titreGrandForum from './components/titreGrandForum.vue'
// import creationMessageTexteForum from './components/creationMessageTexteForum.vue'
// import creationMessageReponseForum from './components/creationMessageReponseForum.vue'
// import reponseMessagesTitreForum from './components/reponseMessagesTitreForum.vue'
// import reponseMessagesForum from './components/reponseMessagesForum.vue'


// //
// import { createApp } from 'vue'
// import { QuillEditor } from '@vueup/vue-quill'
// import '@vueup/vue-quill/dist/vue-quill.snow.css';
// import '@vueup/vue-quill/dist/vue-quill.bubble.css';
// const app = createApp()
// app.component('QuillEditor', QuillEditor)
//


export default {
  name: 'App',

  methods: {
    showProduct: function(name) {
      this.$router.push({name : 'Product', params : { name: name }})
    }
  },


  components: {


    // InscriptionForum,
    // loginForum,
    // loginModifForum,
    // titreMessageForum,
    // avatarForum,
    // logoForum,
    // invitationConnexionForum,
    // reseauSocialInterneForum,
    // titreGrandForum,
    // creationMessageTexteForum,
    // creationMessageReponseForum,
    // reponseMessagesForum,
    // reponseMessagesTitreForum
    
  }

  
}



</script>

<style>

@media screen and (max-width:640px){

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
body {
  background-color: #2cb7f8;
}

}

@media screen and (min-width:641px){
body {
  background-color: #2cf85c;
}
}

</style>
