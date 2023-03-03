<script>
  
  import SingleCard from './SingleCard.vue'
   
  export default {
    props: {
        films: Array,
    },
 
    components:{SingleCard}
};

</script>

<template>

    <SingleCard v-for="film in films" :title="film.title"  :originalname="film.original_title"  :language="film.original_language" :vote="film.vote_average"  />

</template>

<style scoped></style>