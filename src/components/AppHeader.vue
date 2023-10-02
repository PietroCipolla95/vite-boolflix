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
    <header class="bg-black p-3">
        <nav class="d-flex justify-content-between align-items-center">
            <h1 class="text-danger">
                BOOLFLIX
            </h1>
            <div class="d-flex align-items-center">
                <input @keyup="showTvMovie" type="search" v-model="state.query" class="rounded border-3 border-danger ">
                <button @click="showTvMovie" class="btn btn-danger ms-4 p-1">Search</button>
            </div>


        </nav>
    </header>
</template>


<style lang="scss" scoped></style>