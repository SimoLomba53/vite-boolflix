<script>
import SingleCard from "./SingleCard.vue";

export default {
  props: {
    films: Array,
    series: Array,
    baseimageurl: String,
  },

  components: { SingleCard },
};
</script>

<template>
  <div>
    <SingleCard
      v-for="film in films"
      :title="film.title"
      :originalname="film.original_title"
      :language="film.original_language"
      :vote="film.vote_average"
      :imagefilm="baseimageurl + film.poster_path"
    />
  </div>
  <div>
    <SingleCard
      v-for="serie in series"
      :titleseries="serie.name"
      :originalnameseries="serie.original_name"
      :originallanguageseries="serie.original_language"
      :voteseries="serie.vote_average"
      :imageseries="baseimageurl + serie.poster_path"
    />
  </div>
</template>

<style scoped></style>
