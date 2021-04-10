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
        <view-routeur></view-routeur>
        <h1 class="text-center text-white">Forum Texte</h1>
        <div class="border border-white rounded">
            <form id="forum" @submit.prevent="submitFormCommentaire" class="row justify-content-center was-validated needs-validation" novalidate>
                <div class="form-group col-11 col-md-10 m-0 p-1">
                    <label for="commentaire" class="col-auto col-form-label col-form-label-sm"></label> 
                    <textarea name="commentaire" id="commentaire" class="placeholder form-control form-control-lg" placeholder="Veuillez saisir un commentaire" v-model="commentaire" pattern="[A-Za-z0-9\s\-éöàäèüáúóêûîôâ']{2,1500}" required></textarea>
                    <div class="valid-feedback">Valide</div>
                    <div class="invalid-feedback"></div>
                </div>
                <div class="form-group col-6 col-md-7 col-lg-9 col-xl-11 mb-2 text-center">
                    <button type="submit" @click.prevent="submitFormCommentaire" class="commenter btn btn-secondary btn-lg col-12 col-md-5 mt-3 mb-2">Commenter</button>
                </div>            
            </form>
        </div>
    </div>
</template>

<script>
import EnteteConnexion from '@/components/EnteteConnexion'
export default {
    name: 'commentaire', 
    components: {
        EnteteConnexion    
    },
    data(){
        return {
            pseudo:'',          
        }
    },
    methods:{        
        submitFormCommentaire: function (){

            //Vérification par regex du formulaire de dépôt d'un commentaire
            let pseudo = localStorage.getItem('pseudo');
            let commentaire = this.commentaire;
            let regexCommentaire = /[A-Za-z0-9\s\-éöàäèüáúóêûîôâ']{2,1500}/g;
            if((regexCommentaire.test(commentaire) === true)
            ){
                let message = {
                    pseudo: pseudo,
                    commentaire: commentaire,
                    idUser: localStorage.getItem('idUser'),
                    idForum: this.postId
                }
                console.log(message);
                console.log(commentaire)
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
            
            //Envoi du commentaire
            fetch("http://localhost:3000/api/commentaire", envoi)
            .then(response => {
                console.log(response);
                location.replace('http://localhost:8080/forum-texte')
            })            
            .catch(error => alert("Erreur : " + error));
            }
        }
    }, 
    created(){
    this.postId = this.$route.params.id;
    }   
}
</script>

<style scoped lang="scss">
.placeholder{
    font-size: 12px;
    font-style: italic;
    line-height: 50%;
    vertical-align: middle;
}
.commenter{
    font-size: 14px;
    font-weight: bold;
    line-height: 50%;
    vertical-align: middle;
}
</style>