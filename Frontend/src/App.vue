<template>  
  <div id="app" class="container-fluid">         
    <router-view/> 
    <Footer/>
  </div>   
 
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
    name: 'App',
    components: {
        
        Footer     
    }
}

</script>

<style lang="scss">
body {
  margin: 0 auto;
  background-color: #052258;
}
#app {
  margin: 0 auto
}  
.nav li:hover{
  font-weight: bold;  
  border-bottom: 1px solid white;
}
li{
  font-size: 12px;
}
</style>
