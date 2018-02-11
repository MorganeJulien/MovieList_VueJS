<template lang="html">
  <div>
    <div class="row">
      <h2 class="center-align"> Ajouter un film </h2>
    </div>
  <div class="container">
       <div class="row">
         <div class="input-field col s6 ">
           <div class="center-align">
           <input id="title" type="text" class="validate" v-model="new_film.title">
           <label for="title">Nom de film</label>
         </div>
         </div>
       </div>
       <div class="row">
         <div class="input-field col s6">
           <input id="years" type="number" class="validate" v-model="new_film.years">
           <label for="years">Année de sortie</label>
         </div>
       </div>
       <div class="row">
         <div class="input-field col s6">
           <input id="language" type="text" class="validate" v-model="new_film.language">
           <label for="language">Langue originale</label>
         </div>
       </div>
       <div class="row">
         <div class="input-field col s6">
           <textarea id="description" class="materialize-textarea"v-model="new_film.description"></textarea>
           <label for="description">Synopsis</label>
         </div>
       </div>
       <div class="row">
         <div class="input-field col s6">
             <input id="name" type="text" class="validate" v-model="new_film.Director.name">
             <label for="name">Réalisateur</label>
          </div>
        </div>
        <div class="row">
           <div class="input-field col s6">
             <input id="birth" type="text" class="datepicker validate" v-model="new_film.Director.birth">
             <label for="birth">Date de naissance du réalisateur</label>
           </div>
         </div>
         <div class="row">
           <div class="input-field col s6">
             <input id="nationality" type="text" class="validate" v-model="new_film.Director.nationality">
             <label for="nationality">nationalité du réalisateur</label>
           </div>
         </div>
         <div class="row">
           <div class="input-field col s6">
             <input id="nationality" type="url" class="validate" v-model="new_film.picture">
             <label for="nationality">URL de l'affiche du film</label>
           </div>
         </div>
         <button v-on:click="addmovie" class="btn waves-effect waves-light">Ajouter un film
           <i class="material-icons right">send</i>
         </button>
   </div>
 </div>

</template>

<script>
export default {
  data(){
    return{
      new_film:{
        "title": "",
        "years" : "",
        "language" : "",
        "Director":{
          "name":"",
          "nationality":"",
          "birth": ""
        },
        "description":"",
        "picture":""

      }
    }
  },
  methods: {
    addmovie: function(){
      var movie = new Object();

      movie.title= this.new_film.title;
      movie.years= this.new_film.years;
      movie.language= this.new_film.language;

      var Director = new Object();
      Director.name= this.new_film.Director.name;
      Director.nationality= this.new_film.Director.nationality;
      Director.birth=this.new_film.Director.birth;

      movie.Director= Director;

      movie.description= this.new_film.description;
      movie.picture= this.new_film.picture;

      this.$store.dispatch('addMovie',movie);
      this.$router.replace({ path: '/' });
    }
  }

}
</script>

<style lang="css">
</style>
