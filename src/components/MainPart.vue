<script>
import { icon } from "@fortawesome/fontawesome-svg-core";
import CardList from "./CardList.vue";

export default {
  props: {
    films: Array,
    series: Array,
    baseimageurl: String,
    sizeimage: String,
    starIcon: String,
  },

  components: { CardList },
};
</script>

<template>
  <section>
    <div class="bg-dark">
      <CardList
        :films="films"
        :series="series"
        :baseimageurl="baseimageurl"
        :sizeimage="sizeimage"
        :starIcon="starIcon"
      />
    </div>
  </section>
</template>

<style scoped></style>
