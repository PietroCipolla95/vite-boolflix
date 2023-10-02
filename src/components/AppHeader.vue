<script>

import { state } from '../state.js'


export default {

    data() {
        return {
            state,
            query: '',
            movie: '',
            serie: '',
        }
    },

    name: 'AppHeader',

    methods: {

        showTvMovie(query) {

            query = state.query
            state.fetchDatas(query)
            console.log('stai cercando..', query);

        },

    },



}
</script>
<template>
    <header class="bg-black p-3 border-bottom border-danger px-4">
        <nav class="d-flex justify-content-between align-items-center">
            <h1 class="text-danger">
                BOOLFLIX
            </h1>
            <form class="d-flex align-items-center">
                <input @keyup="showTvMovie" type="search" v-model="state.query" class="rounded border-3 border-danger p-1">
                <button @click="showTvMovie" class="btn btn-outline-danger ms-4 fw-semibold">Search</button>
            </form>
        </nav>
    </header>
</template>


<style lang="scss" scoped></style>