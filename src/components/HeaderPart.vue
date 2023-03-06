<script>
  import BaseSearch from './BaseSearch.vue'

  export default{
    props:{
        term:String
    },


    components:{BaseSearch},

     methods: {
        searchingFilter(term) {
            console.log(term);
        },
    },

     
  }

</script>

<template>
    <section>
        <div class="d-flex flex-row align-items-center justify-content-evenly bg-light">
            <div>
                <h1 class="text-info">BOOLFIX</h1>
            </div>
            
            <div>
              <BaseSearch @searching="searchingFilter" />
            </div>
            
        </div>
    </section>
</template>

<style scoped>

</style>
