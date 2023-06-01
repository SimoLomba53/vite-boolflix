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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <div class="flip-card text-center text-light">
    <div class="flip-card-inner d-flex">
      <div
        class="flip-card-front d-flex align-items-center justify-content-center"
      >
        <img :src="imagefilm" alt="" />
        <img :src="imageseries" alt="" />
      </div>
      <div
        class="flip-card-back d-flex flex-column align-items-center justify-content-center"
      >
        <h1 class="text-danger">{{ title }}{{ titleseries }}</h1>
        <p class="text-dark">{{ originalname }}{{ originalnameseries }}</p>
        <img id="flag" :src="getFlag(language)" alt="" />
        <img id="flag" :src="getFlag(originallanguageseries)" alt="" />
        <p>{{ vote }}{{ voteseries }}<i class="fa-solid fa-star" style="color: #ffea00;"></i></p>
        <p></p>
      </div>
    </div>
  </div>

  <!--<div class="flip-card text-center text-light">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="imageseries" alt="" />
      </div>
      <div class="flip-card-back">
        <h1>{{ titleseries }}</h1>
        <p>{{ originalnameseries }}</p>
        <img id="flag" :src="getFlag(originallanguageseries)" alt="" />
        <p>
          {{ voteseries }}
        </p>
      </div>
    </div>
  </div>-->
</template>

<style scoped>
#flag {
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
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
  background-image: url(https://images.unsplash.com/photo-1530176928500-2372a88e00b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80);
  background-size: cover;
  color: white;
  transform: rotateY(180deg);
}

.flip-card-front img {
  height: 513px;
}
</style>
