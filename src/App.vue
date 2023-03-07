<script>
import HeaderPart from "./components/HeaderPart.vue";
import MainPart from "./components/MainPart.vue";
import BaseSearch from "./components/BaseSearch.vue";

import axios from "axios";

export default {
  data() {
    return {
      films: [],
      series: [],
      baseimageurl: "https://image.tmdb.org/t/p/",
    };
  },

  components: { HeaderPart, MainPart, BaseSearch },

  methods: {
    doSomethingResults(term) {
      this.doSomethingMovie(term);
      this.doSomethingSeries(term);
    },

    doSomethingMovie(term) {
      console.log(term);

      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=0947d1f65cbadea30bba5515fa4869c6&query=${term}`
        )
        .then((response) => {
          this.films = response.data.results;
        });
    },

    doSomethingSeries(term) {
      console.log(term);

      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=0947d1f65cbadea30bba5515fa4869c6&query=${term}`
        )
        .then((response) => {
          this.series = response.data.results;
        });
    },
  },
};
</script>

<template>
  <HeaderPart @searching="doSomethingResults" />
  <MainPart :films="films" :series="series" :baseimageurl="baseimageurl" />
</template>

<style scoped></style>
