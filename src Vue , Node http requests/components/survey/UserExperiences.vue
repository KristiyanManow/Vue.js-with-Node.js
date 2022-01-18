<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExpiriences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored Experiences found.
      </p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
    };
  },
  methods: {
    loadExpiriences() {
      this.isLoading = true;
      fetch(
        'https://vue-http-started-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
      )
        .then((responce) => {
          if (responce.ok) {
            return responce.json();
          }
        })
        .then((info) => {
          this.isLoading = false;
          const results = [];
          for (const id in info) {
            results.push({
              id: id,
              name: info[id].name,
              rating: info[id].rating,
            });
          }
          this.results = results;
        });
    },
  },
  mounted() {
    this.loadExpiriences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
