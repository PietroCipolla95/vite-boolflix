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
        {{ movie.original_title }}
      </p>
      <p>
        {{ movie.title }}
      </p>
      <p>
        <img
          :src="'https://purecatamphetamine.github.io/country-flag-icons/3x2/' + movie.original_language.toUpperCase() + '.svg'"
          alt="" :width="40">
      </p>
      <p>
        {{ movie.vote_average }}
      </p>
    </li>
  </ul>
</template>

<style scoped></style>
