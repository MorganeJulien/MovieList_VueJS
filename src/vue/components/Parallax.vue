
<template lang="html">
  <div>


    <div class="parallax-container">
      <div class="section no-pad-bot">
        <div class="container">
          <br><br>
          <h1 class="header center white-text">Movie List</h1>
          <div class="row center">
            <h5 class="header col s12 light white-text">Projet Vue JS, Dawin 2017-2018</h5>
          </div>
        </div>
      </div>
      <div class="parallax"><img src="/../../static/images/parallax1.jpg" alt="..."></div>
    </div>
    <nav>
      <div class="nav-wrapper grey lighten-3">
        <ul id="nav-mobile" class="center-align">
          <li><router-link to="/" class="black-text">Liste des films</router-link></li>
          <li><router-link to="/add" class="black-text">Ajouter un film</router-link></li>
        </ul>
      </div>
    </nav>
</div>

</template>

<script>
export default {
}

</script>

<style lang="css">
.parallax-container {
  height: 400px;
}
</style>
