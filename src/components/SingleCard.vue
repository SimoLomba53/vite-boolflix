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
      if (language == "it") return "https://url/to/ita/flag";
      if (language == "en") return "https://url/to/eng/flag";
      if (language == "jp") return "https://url/to/jpn/flag";
      if (language == "es") return "https://url/to/esp/flag";
      if (language == "ru") return "https://url/to/rus/flag";

      return `https://url/to/${language}/flag`;
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
