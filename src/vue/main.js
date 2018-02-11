import Vue from 'vue' //librairie "vue" dans node_modules
import app from './app.vue' //fichier app.vue local
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import {store} from './store.js'
import router from './routes.js'
import Parallax from './components/Parallax.vue'
import Movies from './components/movies.vue'


Vue.component('parallax',Parallax)
Vue.component('movies',Movies)

new Vue({
  el: '#app',
  render: h => h(app),
  store: store,
  router:router
})
