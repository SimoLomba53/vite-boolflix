<script>
import CardList from "./CardList.vue";

export default {
  props: {
    films: Array,
    series: Array,
    baseimageurl: String,
    sizeimage: String,
  },

  components: { CardList },
};
</script>

<template>
  <section>
    <div class="bg-info">
      <CardList
        :films="films"
        :series="series"
        :baseimageurl="baseimageurl"
        :sizeimage="sizeimage"
      />
    </div>
  </section>
</template>

<style scoped></style>
