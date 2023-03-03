<script >
import HeaderPart from './components/HeaderPart.vue';
import MainPart from './components/MainPart.vue';

import axios from 'axios'

  export default {
    data() {
      return {
        films: [],
      };
    },
 
  components:{ HeaderPart , MainPart},


  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=0947d1f65cbadea30bba5515fa4869c6&query=ritorno"
      )
      .then((response) => {
        this.films=response.data.results;
      });
  },

}
</script>

<template>
    <HeaderPart/>
    <MainPart :films="films"/>

</template>

<style scoped>

</style>
