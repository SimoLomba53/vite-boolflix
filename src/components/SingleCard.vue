<script>
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

export default {
  props: {
    title: String,
    originalname: String,
    language: String,
    vote: String,
    titleseries: String,
    originalnameseries: String,
    originallanguageseries: String,
    voteseries: String,
    imagefilm: Image,
    imageseries: Image,
    starIconResult: String,
  },

  components: { faStarSolid, faStarRegular },

  methods: {
    getFlag(language) {
      if (language == "it")
        return "https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png";
      if (language == "en")
        return "https://www.countryflags.com/wp-content/uploads/england-flag-png-large.png";
      if (language == "jp")
        return "https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png";
      if (language == "es")
        return "https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png";
      if (language == "ru")
        return "https://www.countryflags.com/wp-content/uploads/russia-flag-png-large.png";
      if (language == "fr")
        return "https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png";

      return `https://www.countryflags.com/flag-of-${language}/`;
    },

    getFlag(originallanguageseries) {
      if (originallanguageseries == "it")
        return "https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png";
      if (originallanguageseries == "en")
        return "https://www.countryflags.com/wp-content/uploads/england-flag-png-large.png";
      if (originallanguageseries == "jp")
        return "https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png";
      if (originallanguageseries == "es")
        return "https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png";
      if (originallanguageseries == "ru")
        return "https://www.countryflags.com/wp-content/uploads/russia-flag-png-large.png";
      if (originallanguageseries == "fr")
        return "https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png";

      return `https://www.countryflags.com/flag-of-${originallanguageseries}/`;
    },
  },
};
</script>

<template>
  <div class="flip-card text-center text-light">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="imagefilm" alt="" />
      </div>
      <div class="flip-card-back">
        <h1>{{ title }}</h1>
        <p>{{ originalname }}</p>
        <img id="flag" :src="getFlag(language)" alt="" />
        <p>{{ vote }}</p>
        <p>{{ starIconResult }}</p>
      </div>
    </div>
  </div>

  <div class="text-center text-light">
    <div class="">
      <div class="">
        <img :src="imageseries" alt="" />
      </div>
      <div class="">
        <h1>{{ titleseries }}</h1>
        <p>{{ originalnameseries }}</p>
        <img id="flag" :src="getFlag(originallanguageseries)" alt="" />
        <p>
          {{ voteseries }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#flag {
  width: 30px;
}

.flip-card {
  background-color: transparent;
  width: 342px;
  height: 513px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>
