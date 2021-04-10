<template>
  <div class="form-group  text-center">
    <Header/>
    <button type="submit" @click.prevent="submitDeconnect" class="btn btn-secondary btn-lg col-12 col-md-5 mt-3 mb-2">Déconnexion</button>
  </div> 
</template>

<script>
import Header from '@/components/Header'
export default {
    name: 'App',
    components: {
      Header
    },
    methods:{
      submitDeconnect: function (){
        localStorage.clear();
        location.replace('http://localhost:8080')
      }
    }
}
</script>

<style>

</style>