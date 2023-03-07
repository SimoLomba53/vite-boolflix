<script>
import SingleCard from "./SingleCard.vue";

export default {
  props: {
    films: Array,
    series: Array,
  },

  components: { SingleCard },
};
</script>

<template>
  <SingleCard
    v-for="film in films"
    :title="film.title"
    :originalname="film.original_title"
    :language="film.original_language"
    :vote="film.vote_average"
  />
  <SingleCard
    v-for="serie in series"
    :titleseries="serie.name"
    :originalnameseries="serie.original_name"
    :originallanguageseries="serie.original_language"
    :voteseries="serie.vote_average"
  />
</template>

<style scoped></style>
