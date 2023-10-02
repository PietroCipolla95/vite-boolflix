<script>

import { state } from "../state.js";



export default {

    name: 'AppCards',

    data() {
        return {
            state,
            query: '',
            movie: '',
            serie: '',
            base_img_url: 'https://image.tmdb.org/t/p/',
            no_image_url: 'https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg',
            posterWidth: 'w185',
        }

    },

    methods: {

        getVote(vote) {

            let newVote = Math.round(vote / 2)
            return newVote

        }

    },

}
</script>
<template>
    <!-- row that contains series and films -->
    <div class="row g-0">
        <!-- films row -->
        <div class="row col-6 d-flex p-5">
            <h2 v-if="state.movies.length > 0" class="mb-5 text-danger">Films</h2>
            <div class="col-4" v-for="movie in  state.movies">
                <div class="my_card mb-3 rounded-3 border border-1 border-danger"
                    :style="movie.poster_path !== 'null' ? { backgroundImage: `url(${base_img_url}${posterWidth}${movie.poster_path})` } : { backgroundImage: `url(${no_image_url})` }">
                    <div class="infos text-light p-2 pt-2">
                        <!-- title -->
                        <h4>
                            {{ movie.original_title }}
                        </h4>
                        <!-- <p>
                            OG Title: {{ movie.title }}
                        </p> -->
                        <!-- language -->
                        <p>
                            <img :src="movie.original_language === 'en' ? 'https://flagsapi.com/GB/flat/64.png' : 'https://flagsapi.com/' + movie.original_language.toUpperCase() + '/flat/64.png'"
                                alt="" :width="40">
                        </p>
                        <!-- score -->
                        <p>
                            Avg Score: {{ getVote(movie.vote_average) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- series row -->
        <div class="row col-6 d-flex p-5 align-content-start">
            <h2 v-if="state.series.length > 0" class="mb-5 text-danger">Series</h2>
            <div class="col-4" v-for="serie in  state.series">
                <div class="my_card mb-3 rounded-3 border border-1 border-danger"
                    :style="((serie.poster_path !== null) ? { backgroundImage: `url(${base_img_url}${posterWidth}${serie.poster_path})` } : { backgroundImage: `url(https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg)` })">
                    <div class="infos text-light p-2 pt-2">
                        <!-- title -->
                        <h4>
                            {{ serie.name }}
                        </h4>
                        <!-- <p>
                            OG Title: {{ serie.title }}
                        </p> -->
                        <!-- language -->
                        <p>
                            <img :src="serie.original_language === 'en' ? 'https://flagsapi.com/GB/flat/64.png' : 'https://flagsapi.com/' + serie.original_language.toUpperCase() + '/flat/64.png'"
                                alt="" :width="40">
                        </p>
                        <!-- score -->
                        <p>
                            Avg Score: {{ getVote(serie.vote_average) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.my_card {

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 300px;


    .infos {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.826);
        display: none;
    }

    &:hover {
        .infos {
            display: block;
            cursor: pointer;
        }
    }

}
</style>