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
        <div class="border border-white rounded">
            <router-link class="text-white font-weight-bold mr-2" to="/post">
                <button class="poster btn btn-secondary btn-sm col-12">Que voulez-vous dire ?</button>
            </router-link>
        </div>
        <div class="pt-1">
            <section v-if="errored">
                <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
            </section>
            <section v-else class="d-flex flex-column" >
                <div v-if="loading">Chargement...</div>
                <div v-else v-for="post in info" :key="post.idForum" class="forums col-12 m-0 p-0 pb-1">
                    <div class="border border border-white rounded " >
                        <p class=" post text-white m-0 p-1">{{ post.contenuTexte }}</p>
                        <p class=" pseudo text-right m-0 p-1 lead">par {{ post.pseudoForum }}</p>
                    </div>                  
                    <div class="comments ml-3">
                            <div v-for="comment in post.comments" :key="comment.idCommentaire" class="row border border-white rounded mr-4">
                                <div class="col-11">
                                    <p class="comment col- text-white p-1 m-0">{{comment.commentaire}}</p>
                                    <p class="pseudo text-right m-0 p-1 lead">par {{ comment.pseudoCommentaire }}</p>
                                </div>     
                                <button v-if="comment.pseudoCommentaire === user.pseudo || user.idDroit == 1" @click.prevent="submitCommentaireDelete(comment.idCommentaire)" class="suppPost btn btn-secondary btn-sm col-1"><i class="far fa-trash-alt"></i></button>
                            </div>
                    </div>
                    <div class="text-left pb-1">
                        <router-link :to="`/commentaire/${post.idForum}`" class="text-white font-weight-bold mr-2">
                            <button class="btnComment btn btn-secondary btn-sm col-1"><i class="far fa-comment-dots"></i></button>
                        </router-link>
                        <button v-if="post.pseudoForum === user.pseudo || user.idDroit == 1" @click.prevent="submitForumDelete(post.idForum)" class="suppComment btn btn-secondary btn-sm col-1"><i class="far fa-trash-alt"></i></button>
                    </div>             
                </div>
            </section>
        </div>         
    </div>
</template>

<script>
import axios from 'axios'
import EnteteConnexion from '@/components/EnteteConnexion'
export default {
    name: 'forumTexte',
    components: {
        EnteteConnexion    
    },
    data(){
        return {
            pseudo:'',
            postMessage:'',
            post:{},
            info: null,
            loading: true,
            errored: false,       
            user:{}     
        }
    },
    methods:{        
    
    //Suppression d'un post
        submitForumDelete: function (id){
            axios.delete("http://localhost:3000/api/forum/" + id, {
                headers:{
                    "authorization" : "Bearer " + localStorage.getItem("token")
                }
            })
            .then(response => {
                console.log(response);
                location.replace('http://localhost:8080/forum-texte')
            })            
            .catch(error => alert("Erreur : " + error));
        },

    //Suppression d'un commentaire
        submitCommentaireDelete: function (id){
            axios.delete("http://localhost:3000/api/commentaire/" + id, {
                headers:{
                    "authorization" : "Bearer " + localStorage.getItem("token")
                }
            })    
            .then(response => {
                console.log(response);
                location.replace('http://localhost:8080/forum-texte')
            })            
            .catch(error => alert("Erreur : " + error));
        },
    },
    //Affichage des posts et des commentaires
    created() {
        this.user.pseudo = localStorage.getItem('pseudo')
        this.user.idDroit = localStorage.getItem('idDroit')
        axios.get ("http://localhost:3000/api/forum/", {
                headers: {
                    "authorization": "Bearer " + localStorage.getItem('token')
                }
            })
            .then( response => {
                console.log(response)
                this.loading = false
                this.error = false
                this.info = response.data.result                
            })                
            .catch(error => {
                console.log(error)
                this.errored = true
            })
        
    }
}
</script>

<style scoped lang="scss">
.poster{
    font-size: 12px;
    font-style: italic;
    vertical-align: middle;
}
.publier{
    font-size: 14px;
    font-weight: bold;
    line-height: 50%;
    vertical-align: middle;
}
.postMessage{
    font-size: 14px;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
}
.btnComment{
    line-height: 10%;
    vertical-align: middle;
}
.suppComment{
    line-height: 10%;
    vertical-align: middle;
}
.suppPost{
    line-height: 10%;
    vertical-align: middle;
}
.pseudo{
    font-size: 10px;
    font-style: italic;
    color: rgb(204, 216, 236);
}
.comment{
    font-size: 10px;
    font-style: italic;
    color: rgb(204, 216, 236);
    
}
.comments{
    line-height: 50%;
    vertical-align: middle;
}
.border{
    line-height: auto;
    vertical-align: middle;
}

</style>