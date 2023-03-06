<script>
  import BaseSearch from './BaseSearch.vue'

  export default{
    

    components:{BaseSearch},
    
    emits: ["searchingToGranpa"],
     
     methods: {
        searchingToGranpa(term) {
            this.$emit('searchingToGranpa', term)
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
              <BaseSearch @searching="searchingToGranpa"/>
            </div>
            
        </div>
    </section>
</template>

<style scoped>

</style>
