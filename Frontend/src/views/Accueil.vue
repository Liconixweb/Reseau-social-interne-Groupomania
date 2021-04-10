<template>
    <div class="row justify-content-center align-items-center m-4 m-md-5">
        <EnteteAccueil/>
      <h1 class="accueil col-12 col-md-9 col-lg-8 text-center text-white font-weight-bold">Bienvenue sur le réseau social de l'entreprise</h1>
    </div> 
</template>

<script>
import EnteteAccueil from '@/components/EnteteAccueil'
export default {    
    name: 'Accueil',
    components: {
        EnteteAccueil     
    }
}
</script>

<style scoped lang="scss">
.accueil{
    text-shadow: 10px 10px 2px rgb(51, 85, 150);    
}
h1{
    font-size: 40px;
}
@media screen and (min-width: 768px) and (max-width: 2500px) {
    .accueil{
        height: 600px;        
    }
    h1{
    font-size: 70px;
    }
}
</style>