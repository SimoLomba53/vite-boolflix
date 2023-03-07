<script>
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import SingleCard from "./SingleCard.vue";

export default {
  props: {
    films: Array,
    series: Array,
    baseimageurl: String,
    sizeimage: String,
    starIcon: String,
  },

  components: { SingleCard },
};
</script>

<template>
  <div>
    <div
      class="d-flex flex-row flex-wrap align-items-center justify-content-center gap-4 p-5"
    >
      <SingleCard
        v-for="film in films"
        :title="film.title"
        :originalname="film.original_title"
        :language="film.original_language"
        :vote="film.vote_average / 2"
        :imagefilm="baseimageurl + sizeimage + film.poster_path"
        :starIconResult="starIcon * (film.vote_average / 2)"
      />
    </div>
    <div
      class="d-flex flex-row flex-wrap align-items-center justify-content-center gap-4 p-5"
    >
      <SingleCard
        v-for="serie in series"
        :titleseries="serie.name"
        :originalnameseries="serie.original_name"
        :originallanguageseries="serie.original_language"
        :voteseries="serie.vote_average / 2"
        :imageseries="baseimageurl + sizeimage + serie.poster_path"
      />
    </div>
  </div>
</template>

<style scoped></style>
