<script>
    export default {
    data() {

        return {
            term: "",
        };
    },

   


    emits: ["searching"],

    methods: {
        search() {
            this.term("searching", this.term);
            console.log({term})
        },
    },
};
</script>

<template>
        <form @submit.prevent="">
        <div class="input-group">
            <input type="text"  class="form-control" placeholder="Search..." aria-label="Recipient's username"
                        aria-describedby="basic-addon2">
            <button type="button" @click="search" class="input-group-text" id="basic-addon2">SEARCH</button>
        </div>
        </form>
</template>

<style scoped></style>
