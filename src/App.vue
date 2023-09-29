<script>
import { state } from './state.js'

export default {
  name: 'App',
  data() {
    return {
      state
    }
  },
  created() {
    state.fetchMovies;
  }
}


</script>

<template>
  <input type="search" v-model="state.query">
  <button @click="showMovies">cerca</button>

  <ul>
    <li v-for="movie in state.movies">
      {{ movie.original_title }}
    </li>
  </ul>
</template>

<style scoped></style>
