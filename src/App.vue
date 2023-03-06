<script>
import HeaderPart from "./components/HeaderPart.vue";
import MainPart from "./components/MainPart.vue";
import BaseSearch from "./components/BaseSearch.vue";

import axios from "axios";

export default {
  data() {
    return {
      films: [],
    };
  },

  components: { HeaderPart, MainPart, BaseSearch },

  methods: {
    doSomething(term) {
      console.log(term);

      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=0947d1f65cbadea30bba5515fa4869c6&query=${term}`
        )
        .then((response) => {
          this.films = response.data.results;
        });
    },
  },
};
</script>

<template>
  <HeaderPart @searching="doSomething" />
  <MainPart :films="films" />
</template>

<style scoped></style>
