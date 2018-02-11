<template lang="html">
<div>
  <div class="row">
    <h2 class="center-align"> Liste de films </h2>
  </div>
  <div class="container">
  <div class="row center-align" >
    <div v-for="movie in movies" v-bind:key="movie.id" v-bind:movie="movie">
    <div class="col s4">
        <div class="card large hoverable">
          <div class="card-image">

            <img :src="movie.picture">
          </div>
          <div class="card-content">
            <span class="card-title black-text">{{movie.title}}</span>
            <p>{{movie.description}}</p>
          </div>
          <div class="card-action">
            <router-link :to="{ name: 'movie', params: { id: movie.id }}"><i class="material-icons">add_circle</i>Details</router-link>
          </div>
        </div>
    </div>
  </div>
  </div>
</div>
</div>

</template>

<script>
export default {
  computed: {

    movies: function() {
      return this.$store.state.movies;
    }
  }

}
</script>

<style lang="css">
</style>
