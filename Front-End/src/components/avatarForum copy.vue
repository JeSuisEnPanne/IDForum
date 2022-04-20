<template>
  <div id="app">
  

   
   
      <div>
      <img v-for="avatar in avatars" :key="avatar.id" src="http://localhost:8880/{{ avatar }}">

      </div>
     
                      
    



  </div>

</template>




<script>


import axios from "axios";



export default {
  
  name: 'loginForum',


             data() {
               return {

                 avatars: [],
                    avatar: [],
                    pokemons: []


                }
            },

                 mounted() {
                   axios.get('http://localhost:8880/api/avatar')
                        .then(response => (this.pokemons = response.data.data))
                    
                    console.log('Steve');
                    console.log(this.pokemons);

                    },

methods: {

               

                    },
           



               
}
</script>
       


<style scoped>
.couleurFond {
  background-image: url("images/yellow.png");
  background-size: 80% auto;
  width: 500px;
  height: 500px;
  text-align: center;
  padding: 10px;
  border: 1px solid black;
}

.texteGauche {
  text-align: left;
  width: 100%;
}

.largeurChamp {
  width: 95%;
}
</style>
