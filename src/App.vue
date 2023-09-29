<script>
import { state } from './state.js'

export default {

  name: 'App',
  data() {
    return {
      state,
      query: '',
      flag: '',
    }
  },

  methods: {

    showMovies(query) {

      query = state.query
      state.fetchMovies(query)
      this.getFlag();
      console.log('stai cercando..', query);

    },

    getFlag(flag) {

      if (movie.original_language === 'en') {

        flag = 'GB'

      } else if (movie.original_language === 'fr') {

        flag = 'FR'

      } else if (movie.original_language === 'it') {

        flag = 'IT'

      } else {

        { { movie.original_language } }

      }

    }

  }
}


</script>

<template>
  <input type="search" v-model="state.query">
  <button @click="showMovies">cerca</button>

  <ul>
    <li v-for="movie in state.movies">
      <p>
        {{ movie.original_title }}
      </p>
      <p>
        {{ movie.title }}
      </p>
      <p>
        <img src="https://flagsapi.com/`${getFlag(flag)}`/shiny/64.png">
      </p>
      <p>
        {{ movie.vote_average }}
      </p>
    </li>
  </ul>
</template>

<style scoped></style>
