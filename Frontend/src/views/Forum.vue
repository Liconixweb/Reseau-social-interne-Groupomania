<template>
   <div class="accueil-forum justify-content-between">  
      <EnteteConnexion/>
      <h1 class="text-center text-white mb-4">Forums</h1>
      <ul class="nav  nav-fill">
        <li class="nav-item bg-secondary mb-4">
          <router-link class="nav-link text-white font-weight-bold" to="/forum-texte">
          <p>FORUM TEXTE</p>
          <p>Venez partager un message avec vos collègues</p>
          </router-link>
        </li>
        <li class="nav-item bg-secondary mb-4">
        <router-link class="nav-link text-white font-weight-bold" to="/forum-multimedia">
            <p>FORUM MULTIMEDIA</p>  
            <p>Venez partager un multimédia avec vos collègues</p>
        </router-link>
        </li>
      </ul>  
    </div>
</template>

<script>
import EnteteConnexion from '@/components/EnteteConnexion'
export default {
    name: 'forum',
    components: {
        EnteteConnexion    
    }
        }        
        
</script>

<style>

</style>