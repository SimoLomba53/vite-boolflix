<script>
import CardList from "./CardList.vue";

export default {
  props: {
    films: Array,
    series: Array,
    baseimageurl: String,
  },

  components: { CardList },
};
</script>

<template>
  <section>
    <div class="bg-info">
      <CardList :films="films" :series="series" :baseimageurl="baseimageurl" />
    </div>
  </section>
</template>

<style scoped></style>
