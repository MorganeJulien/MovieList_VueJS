import Vue from 'vue'
import VueRouter from 'vue-router'
import movies from './components/movies.vue'
import formMovie from './components/form-new-film.vue'
import movieItem from './components/movie-item.vue'
import editMovie from './components/edit-movie.vue'

Vue.use(VueRouter)


const routes = [
  { path: '/', component: movies  },
  { path: '/add', component: formMovie },
  { path: '/movie/:id', name:'movie', component: movieItem },
  { path: '/movie/:id/edit', name:'edit', component: editMovie }
]

export default new VueRouter({
  routes ,
  mode:'history'
})
