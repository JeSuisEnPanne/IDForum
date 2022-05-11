<template>
  

  <div class="colonne">

    <div>
        <logoForum></logoForum>
        <reseauSocialInterneForum></reseauSocialInterneForum>
        <loginModifForum></loginModifForum>
    </div>

    <div class="messages">
       <titreMessageForum></titreMessageForum>
    </div>

  </div>






</template>


<script>

import logoForum from '../components/logoForum.vue'
import reseauSocialInterneForum from '../components/reseauSocialInterneForum.vue'
import loginModifForum from '../components/loginModifForum.vue'
import titreMessageForum from '../components/titreMessageForum.vue'


export default {



  components: {

    loginModifForum,
    reseauSocialInterneForum,
    logoForum,
    titreMessageForum,
   

  }


}
</script>

<style scoped>

@media screen and (max-width:640px){

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
.colonne {
  display: flex;
  flex-direction: column;
}
.messages {
  width: 100%;

}

}

@media screen and (min-width:641px){
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