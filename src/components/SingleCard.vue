<script>
export default {
  props: {
    title: String,
    originalname: String,
    language: String,
    vote: String,
  },

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

      return `https://www.countryflags.com/flag-of-${language}/`;
    },
  },
};
</script>

<template>
  <div class="text-center text-light">
    <h1>{{ title }}</h1>
    <p>{{ originalname }}</p>
    <img id="flag" :src="getFlag(language)" alt="" />
    <p>{{ vote }}</p>
  </div>
</template>

<style scoped>
#flag {
  width: 10px;
}
</style>
