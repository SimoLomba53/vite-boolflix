<script>
export default {
  data() {
    return {
      term: "",
    };
  },

  methods: {
    search() {
      this.$emit("searching", this.term);
    },
  },
};
</script>

<template>
  <section>
    <div
      class="d-flex flex-row align-items-center justify-content-between p-2 bg-light"
    >
      <div>
        <h1 class="text-danger">BOOLFIX</h1>
      </div>

      <div>
        <!--<BaseSearch @searching="searchingToGrandpa" />-->
        <form @submit.prevent="">
          <div class="input-group">
            <input
              type="text"
              v-model="term"
              class="form-control border-1 border-secondary"
              placeholder="Search..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <button
              type="button"
              @click="search"
              class="input-group-text text-white bg-dark"
              id="basic-addon2"
            >
              SEARCH
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
