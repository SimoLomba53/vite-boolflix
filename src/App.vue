<script>
import HeaderPart from "./components/HeaderPart.vue";
import MainPart from "./components/MainPart.vue";
import BaseSearch from "./components/BaseSearch.vue";

import axios from "axios";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      films: [],
      series: [],
      baseimageurl: "https://image.tmdb.org/t/p/",
      sizeimage: "http://image.tmdb.org/t/p/w342/",
      starIcon: faStar,
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
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap" rel="stylesheet">
  <HeaderPart @searching="doSomethingResults" />
  <MainPart
    :films="films"
    :series="series"
    :baseimageurl="baseimageurl"
    :sizeimage="sizeimage"
    :starIcon="starIcon"
  />
</template>

<style scoped></style>
