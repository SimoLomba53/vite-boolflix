<script>
   export default {
    props: {
        title:String,
        originalname:String,
        language:String,
        vote:String,
    },
 
    
};
</script>

<template>
    <div class="text-center text-light">
    <h1>{{ title }}</h1>
    <p>{{ originalname }}</p>
    <p>{{ language }}</p>
    <p>{{ vote }}</p>
    </div>

</template>

<style scoped></style>