<template lang="html">
  <div >
    <div class="row">
      <h2 class="center-align"> {{movie.title}} </h2>
    </div>
    <div class="row valign-wrapper">
      <div class="col s6 ">
        <div class="row ">
          <p> <strong>Année de réalisation : </strong> {{movie.years}}</p>
          <p><strong>langue original : </strong> {{movie.language}}</p>
          <h5>Synopsis : </h5>
          <p>{{movie.description}}</p>
          <h5>Réalisation : </h5>
          <p>{{movie.Director.name}} ( {{movie.Director.birth}} ), {{movie.Director.nationality}}</p>
          <div class="row center">

            <a v-on:click="editmovie(movie)" class="waves-effect waves-light btn-large"><i class="material-icons left">edit</i>Modifer</a>
            <a v-on:click="deletemovie(movie)" class="waves-effect waves-light btn-large"><i class="material-icons left">delete</i>Supprimer</a>
          </div>
        </div>
      </div>
      <div class="col s5">
        <img class="responsive-img" :src="movie.picture">
      </div>

    </div>
  </div>

</template>

<script>
export default {
  data() {
        return {
            'id' : this.$route.params.id
        }
    },
  computed: {
        movie: function() {
            return this.$store.getters.getMovieById(this.id)
        }
    },
    methods:{
      deletemovie: function(){
        this.$store.dispatch('deleteMovie', this.$store.state.movies.indexOf(this.movie));
        this.$router.replace({ path: '/' });
      },
      editmovie: function(){
        this.$router.push({ name: 'edit', params: { id: this.id }});
      }
    }

}
</script>

<style lang="css">
strong{
  font-size: 1.64em;
  line-height: 110%;
  font-weight: 400;
}
</style>
