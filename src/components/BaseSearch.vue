<script>
    export default {
    data() {
        return {
            term: "",
        };
    },

    
    $emit: ["searching"],

    methods: {
       
        search() {
            
            this.$emit("searching", this.term);
        },
    },
};
</script>

<template>
        <form @submit.prevent="">
        <div class="input-group">
            <input type="text" v-model="term" class="form-control" placeholder="Search..." aria-label="Recipient's username"
                        aria-describedby="basic-addon2">
            <button type="button" @click="search" class="input-group-text" id="basic-addon2">SEARCH</button>
        </div>
        </form>
</template>

<style scoped></style>
