<template>
   <div class="form-row flex-column justify-content-center m-0 p-0">  
        <EnteteConnexion/> 
        <ul class="nav nav-fill">
            <li class="nav-item h-50 bg-secondary">
                <router-link class="nav-link pl-4 p-1 col-1 text-white font-weight-bold" to="/forum">
                    <i class="fas fa-angle-left"></i>
                </router-link>
            </li>   
            <li class="nav-item h-50 bg-secondary">
                <router-link class="nav-link p-1 text-white font-weight-bold" to="/forum-texte">Forum texte</router-link>
            </li>
            <li class="nav-item h-50 bg-secondary">
                <router-link class="nav-link p-1 text-white font-weight-bold" to="/forum-multimedia">Forum multimédia</router-link> 
            </li>
        </ul>  
        <h1 class="text-center text-white">Forum Texte</h1>
        <div class=" formulaire border border-white rounded">
            <form id="forum" @submit.prevent="submitFormForum" class="row justify-content-center was-validated needs-validation p-0" novalidate>
                <div class="case form-group col-11 col-md-10 m-0 pr-1 pl-1">
                    <label for="post" class="col-auto col-form-label col-form-label-sm"></label> 
                    <textarea name="post" id="post" class=" placeholder form-control form-control-sm" placeholder="Veuillez saisir un nouveau post" v-model="postMessage" pattern="[A-Za-z0-9\s\-éöàäèüáúóêûîôâ']{2,1500}" required></textarea>
                    <div class="valid-feedback">Valide</div>
                    <div class="invalid-feedback"></div>
                </div>
                <div class="form-group col-6 col-md-7 col-lg-9 col-xl-11 mb-2 text-center">
                    <button type="submit" @click.prevent="submitFormForum" class="publier btn btn-secondary btn-sm col-10 col-md-5 ">Publier</button>
                </div>            
            </form>
        </div>        
    </div>
</template>

<script>
import EnteteConnexion from '@/components/EnteteConnexion'
export default {
    name: 'forumTexte',
    components: {
        EnteteConnexion    
    },
    data(){
        return {
            postMessage:'', 
        }
    },
    methods:{        

        //Publication d'un post
        submitFormForum: function (){

            //Vérification par regex du formulaire de dépôt d'un post
            let pseudo = localStorage.getItem('pseudo');
            let post = this.postMessage;
            let regexPost = /[A-Za-z0-9\s\-éöàäèüáúóêûîôâ']{2,1500}/g;
            if((regexPost.test(post) === true)
            ){
                let message = {
                    pseudo: pseudo,
                    post: post,
                    idUser: localStorage.getItem('idUser')
                }
                console.log(message);
                const envoi = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                    body: JSON.stringify({ message }),
                    mode: 'cors',
                    cache: 'default'
                }
            console.log(envoi);

            //Envoi du post
            fetch("http://localhost:3000/api/forum", envoi)
            .then(response => {
                console.log(response);
                location.replace('http://localhost:8080/forum-texte')
            })            
            .catch(error => alert("Erreur : " + error));
            }
        },   
    

    
    
        
    }
}
</script>

<style scoped lang="scss">
.placeholder{
    font-size: 12px;
    font-style: italic;
    line-height: auto;
    vertical-align: middle;
}

.publier{
    font-size: 14px;
    font-weight: bold;
    line-height: 50%;
    vertical-align: middle;
}
.border{
    vertical-align: middle;
}

</style>