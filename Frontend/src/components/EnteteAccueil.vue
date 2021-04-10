<template>
  <div>
    <nav>
      <ul class="nav justify-content-start nav-fill">
        <li class="nav-item">
          <router-link class="nav-link m-1 p-0 text-center text-white" to="/signup">S'incrire</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link m-1 p-0 text-white" to="/login">Se connecter</router-link> 
        </li>
      </ul>  
    </nav>
    <router-link class="nav-link text-white" to="/">
      <img class="logo d-block mx-auto img-fluid p-1" src='@/assets/images/icon-left-font-monochrome-white-redimensionné.png' alt="logo Groupomania">    
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'EnteteAccueil'
}
</script>

<style>

</style>