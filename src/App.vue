<script>
import { state } from './state.js'

export default {

  name: 'App',
  data() {
    return {
      state,
      query: '',
      movie: '',
      serie: '',
    }
  },

  methods: {

    showTvMovie(query) {

      query = state.query
      state.fetchDatas(query)
      console.log('stai cercando..', query);

    },

  }
}


</script>

<template>
  <input type="search" v-model="state.query">
  <button @click="showTvMovie">cerca</button>


  <div class="d-flex">

    <ul>
      <h2 v-if="state.movies.length > 0">Films</h2>
      <li v-for="movie in  state.movies">
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

    <ul>
      <h2 v-if="state.series.length > 0">Tv Series</h2>
      <li v-for="serie in state.series">
        <p>
          Title: {{ serie.name }}
        </p>
        <p>
          Og Title: {{ serie.original_name }}
        </p>
        <p>
          Lang: <img
            :src="serie.original_language = 'en' ? 'https://flagsapi.com/GB/flat/64.png' : 'https://flagsapi.com/' + serie.original_language.toUpperCase() + '/flat/64.png'"
            alt="" :width="40">
        </p>
        <p>
          Avg Score: {{ serie.vote_average }}
        </p>

      </li>
    </ul>


  </div>
</template>

<style scoped></style>
