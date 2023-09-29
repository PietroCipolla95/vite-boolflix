<script>
import { state } from './state.js'

export default {

  name: 'App',
  data() {
    return {
      state,
      query: '',
      movie: '',
    }
  },

  methods: {

    showMovies(query) {

      query = state.query
      state.fetchMovies(query)
      console.log('stai cercando..', query);

    },

  }
}


</script>

<template>
  <input type="search" v-model="state.query">
  <button @click="showMovies">cerca</button>

  <ul>
    <li v-for="movie in  state.movies ">
      <p>
        Title: {{ movie.original_title }}
      </p>
      <p>
        OG Title: {{ movie.title }}
      </p>
      <p>
        Lang: <img
          :src="movie.original_language = 'en' ? 'https://flagsapi.com/GB/flat/64.png' : 'https://flagsapi.com/' + movie.original_language.toUpperCase() + '/flat/64.png'"
          alt="" :width="40">
      </p>
      <p>
        Avg Score: {{ movie.vote_average }}
      </p>
    </li>
  </ul>
</template>

<style scoped></style>
