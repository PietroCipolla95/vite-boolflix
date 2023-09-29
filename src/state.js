import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({

    my_api_key: '41f0b1bdb7855d59b45d0dc81fd4906f',
    movie_url: '',
    query: '',
    movies: [],

    fetchMovies(query) {

        this.movie_url = 'https://api.themoviedb.org/3/search/movie';

        axios.get(this.movie_url, {
            params: {
                api_key: this.my_api_key,
                query: state.query,
            }
        })

            .then(response => {

                this.movies = response.data.results
                console.log(this.movies);

            })

            .catch(error => {
                console.log(error);
            })

    }







})