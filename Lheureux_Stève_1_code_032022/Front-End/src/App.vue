<template>

  <router-view></router-view>

</template>


<script>

export default {
  name: "App",

  methods: {
    showProduct: function (name) {
      this.$router.push({ name: "Product", params: { name: name } });
    },
  },

};
</script>

<style>

/*Media queries Portable*/
@media screen and (max-width: 640px) {
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
  body {
    background-color: #2cb7f8;
  }
}

/*Media queries Tablet et PC*/

@media screen and (min-width: 641px) {
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

/*Centrage du site pour Tablet et PC*/

  body {
    background-color: #2cb7f8;
    max-width: 1000px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
