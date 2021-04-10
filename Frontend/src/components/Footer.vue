<template>
    <footer class="footer row pb-3 m-0 p-lg-5">
        <ul class="col-12 d-flex flex-column justify-items-center align-items-center flex-md-row justify-content-md-between">
            <li class="col-10 col-md-4 text-center list-unstyled">
                <router-link class="text-white" to="/Confidential">Politique de confidentialité</router-link>
            </li>
            <li class="col-10 col-md-3 text-center list-unstyled">
                <router-link class="text-white" to="/Reglement">Réglement du forum</router-link>
            </li>
            <li class="col-10 col-md-3 text-center list-unstyled">
                <router-link class="text-white" to="/Unsubscribe">Désinscription</router-link>
            </li>
            <li class="col-10 col-md-2 text-center list-unstyled">
                <a class="text-white" href="mailto:groupomania@reseau-social.fr">Contact</a>
            </li>              
        </ul>
    </footer>
</template>

<script> 
export default {
  name: 'Footer'  
}
</script>

<style scoped lang="scss">
li{
    font-size: 10px;
}

</style>
