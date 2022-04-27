<template>
  
  <h1>Bienvenue</h1>

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

import logoForum from '../components/logoForum.vue'
import reseauSocialInterneForum from '../components/reseauSocialInterneForum.vue'
import loginModifForum from '../components/loginModifForum.vue'


import reponseMessagesForum from '../components/reponseMessagesForum.vue'
import creationMessageReponseForum from '../components/creationMessageReponseForum.vue'



export default {



  components: {

    loginModifForum,
    reponseMessagesForum,
    reseauSocialInterneForum,
    logoForum,
    creationMessageReponseForum,
   

  }


}
</script>

<style scoped>

.colonne {
  display: flex;
  flex-direction: row;
}
.messages {
  width: 1000px;
  margin-left: 10px;
}

</style>