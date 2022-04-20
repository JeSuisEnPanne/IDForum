<template>
  <div id="app">
  
<div class="couleurFond">
    <div v-for="avatar in avatars.reverse()" :key="avatar.id">
            
            <a href="#{{ item.id }}">
                <img
                    data-original="{{ avatar.avatar }}"
                    v-bind:src="avatar.avatar"
                    class="lazy" alt="">
            </a>
        </div>

</div>
  </div>
</template>

<script>


import axios from "axios";


export default {

            name: 'titreMessageForum',


             data() {
                return {
                    avatars: [],
                    avatar: []

                }
            },

                //Affiche tout les utilisateur
                mounted() {
                    
                    axios.get('http://localhost:8880/api/avatars')
                        .then(response => (this.avatars = response.data.data))
                      

                    },


            methods: {

               

                    },
}
</script>

<style scoped>
.couleurFond {
  background-image: url("images/yellow.png");
  background-size: 100% auto;
  width: 200px;
  text-align: center;
  padding: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap
  
  
}

.texteGauche {
  text-align: left;
  width: 100%;
}

.largeurChamp {
  width: 95%;
}

.couleurButton {
  /* background: red; */
}

.couleurh2 {
  background-color: rgb(57, 139, 246);
}
.lazy {
  width: 65px;
}

</style>
