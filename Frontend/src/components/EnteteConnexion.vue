<template>
    <div>
        <nav>
        <ul class="nav justify-content-start nav-fill">
            <li class="nav-item">
            <router-link class="nav-link m-1 p-0 text-white" to="/deconnect">Se déconnecter</router-link> 
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
    name: 'EnteteConnexion'
}
</script>

<style>

</style>