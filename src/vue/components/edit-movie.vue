<template lang="html">
  <div>
    <div class="row">
      <h2 class="center-align"> Modifier un film </h2>
    </div>
  <div class="container">
       <div class="row">
         <div class="input-field col s6 ">
           <div class="center-align">
           <input id="title" type="text" class="validate" v-model="movie.title">
           <label for="title">Nom de film</label>
         </div>
         </div>
       </div>
       <div class="row">
         <div class="input-field col s6">
           <input id="years" type="number" class="validate" v-model="movie.years">
           <label for="years">Année de sortie</label>
         </div>
       </div>
       <div class="row">
         <div class="input-field col s6">
           <input id="language" type="text" class="validate" v-model="movie.language">
           <label for="language">Langue originale</label>
         </div>
       </div>
       <div class="row">
         <div class="input-field col s6">
           <textarea id="description" class="materialize-textarea"v-model="movie.description"></textarea>
           <label for="description">Synopsis</label>
         </div>
       </div>
       <div class="row">
         <div class="input-field col s6">
             <input id="name" type="text" class="validate" v-model="movie.Director.name">
             <label for="name">Réalisateur</label>
          </div>
        </div>
        <div class="row">
           <div class="input-field col s6">
             <input id="birth" type="text" class="datepicker validate" v-model="movie.Director.birth">
             <label for="birth">Date de naissance du réalisateur</label>
           </div>
         </div>
         <div class="row">
           <div class="input-field col s6">
             <input id="nationality" type="text" class="validate" v-model="movie.Director.nationality">
             <label for="nationality">nationalité du réalisateur</label>
           </div>
         </div>
         <div class="row">
           <div class="input-field col s6">
             <input id="nationality" type="url" class="validate" v-model="movie.picture">
             <label for="nationality">URL de l'affiche du film</label>
           </div>
         </div>
         <button v-on:click="editmovie" class="btn waves-effect waves-light">Modifier
           <i class="material-icons right">send</i>
         </button>
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
  methods: {
    editmovie: function(){
      var movie = new Object();

      movie.title= this.movie.title;
      movie.years= this.movie.years;
      movie.language= this.movie.language;

      var Director = new Object();
      Director.name= this.movie.Director.name;
      Director.nationality= this.movie.Director.nationality;
      Director.birth=this.movie.Director.birth;

      movie.Director= Director;

      movie.description= this.movie.description;
      movie.picture= this.movie.picture;

      this.$store.dispatch('editMovie',movie);
      this.$router.push({ path: '/' });
    }
  }

}
</script>

<style lang="css">
</style>
