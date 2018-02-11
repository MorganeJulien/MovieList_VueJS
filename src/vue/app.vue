<template>
  <div>
    <parallax></parallax>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    computed: {
      movies: function() {
        return this.$store.state.movies;
      }
    },
    mounted: function() {
      //this.$store.commit("setMessage", "Hello world")
      this.$store.dispatch("loadMovies")
    }
}
</script>

<style>
</style>
