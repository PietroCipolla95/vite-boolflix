<script>
import AppHeader from './components/AppHeader.vue';
import AppCards from './components/AppCards.vue';
import { state } from './state.js'

export default {

  name: 'App',

  data() {
    return {
      state,
      query: '',
      movie: '',
      serie: '',
      base_img_url: 'https://image.tmdb.org/t/p/',
      posterWidth: 'w185',
    }

  },

  methods: {

    getVote(vote) {

      let newVote = Math.round(vote / 2)
      return newVote

    }

  },

  components: {
    AppHeader,
    AppCards,
  }

}


</script>

<template>
  <body>

    <AppHeader />

    <AppCards />



  </body>
</template>

<style scoped></style>
