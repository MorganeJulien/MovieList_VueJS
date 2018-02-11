import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        movies: []
    },
    mutations: {
      loadMovies: (state, movies) => {
        state.movies = movies
      },
      addMovie: (state, movie) => {
        state.movies.push(movie)
      },
      deleteMovie: (state, id) =>{
        state.movies.splice(id,1);
      },
      editMovie: (state, id) =>{
        //TODO
      }
    },
    actions: {
      loadMovies (context) {
            axios.get('/api/movies')
            .then(res => {
                context.commit('loadMovies', res.data)
            })
      },
      addMovie (context, movie) {
        axios.post('/api/movie', movie)
        .then(res => {
          context.commit('addMovie', movie)
        })
      },
      deleteMovie (context, id) {
        axios.put('/api/movie/:id', {
            params: {
            id: id
          }
        })
        .then(res => {
          context.commit('deleteMovie', id)
        })
      },
      editMovie (context, movie) {
          //TODO
      }
    },
    getters: {
      getMovieById: (state) => (id) => {
        return state.movies.find(movie => movie.id === id)
      }
    }

})
