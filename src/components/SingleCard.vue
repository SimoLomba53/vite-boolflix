<script>
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

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
  <div class="text-center text-light">
    <img :src="imagefilm" alt="" />
    <h1>{{ title }}</h1>
    <p>{{ originalname }}</p>
    <img id="flag" :src="getFlag(language)" alt="" />
    <p>{{ vote }}</p>
    <p><font-awesome-icon icon="fa-solid fa-star" /></p>
  </div>

  <div class="text-center text-light">
    <img :src="imageseries" alt="" />
    <h1>{{ titleseries }}</h1>
    <p>{{ originalnameseries }}</p>
    <img id="flag" :src="getFlag(originallanguageseries)" alt="" />
    <p>
      {{ voteseries }}
    </p>
  </div>
</template>

<style scoped>
#flag {
  width: 30px;
}
</style>
