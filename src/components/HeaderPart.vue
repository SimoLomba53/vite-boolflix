<script>
export default {
  data() {
    return {
      term: "",
    };
  },

  methods: {
    search(term) {
      this.$emit("searching", term);
    },
  },
};
</script>

<template>
  <section>
    <div
      class="d-flex flex-row align-items-center justify-content-evenly bg-light"
    >
      <div>
        <h1 class="text-info">BOOLFIX</h1>
      </div>

      <div>
        <!--<BaseSearch @searching="searchingToGrandpa" />-->
        <form @submit.prevent="">
          <div class="input-group">
            <input
              type="text"
              v-model="term"
              class="form-control"
              placeholder="Search..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <button
              type="button"
              @click="search"
              class="input-group-text"
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
