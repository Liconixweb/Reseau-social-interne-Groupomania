<template>
    <div class="login form-row rounded bg-transparent shadow justify-content-center">
        <Header/>
        <form id="login" @submit.prevent="submitFormLogin" class="row justify-content-center was-validated needs-validation" novalidate>
            <div class="form-group col-9 col-md-10 mb-0 pr-2 pl-2">
                <label for="pseudo"></label> 
                <input type="text" name="pseudo" id="pseudo" class="form-control form-control-lg" placeholder="Pseudonyme" v-model="pseudo" pattern="[A-Za-z\s\-éöàäèüáúóêûîôâ']{2,10}" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir un pseudo</div>
            </div>
            <div class="form-group col-9 col-md-10 mb-0 pr-2 pl-2">
                 <label for="password"></label> 
                <input type="password" name="password" id="password" class="form-control form-control-lg" placeholder="Mot de passe" v-model="password" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir votre mot de passe</div>
            </div>
            <div class="form-group col-12 text-center m-2">
                <button type="submit" @click.prevent="submitFormLogin" class="btn btn-secondary btn-lg mt-3 mb-2">Se connecter</button>
            </div>
            <p class="inscription text-center text-white col-9 mb-4">
                Vous n'avez pas encore de compte, <router-link to="/signup">inscrivez-vous</router-link>.
            </p>
        </form>
    </div>
</template>

<script>
import Header from '@/components/Header'
export default ({
    name: 'login',
    components: {
      Header
    },
    data(){
        return {
            pseudo: '',
            password: ''
        }
    },
    methods:{
        submitFormLogin: function (){

            let pseudo = this.pseudo;
            let password = this.password;
            if((pseudo === "") 
                && (password === "")
            ){
                alert ("Veuillez s'il vous plaît, indiquer votre email et votre mot de passe valide ! ")
            } else{
                let login = {
                    pseudo: pseudo, 
                    password: password
                };
                console.log(login);
                const envoi = {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({ login }),
                    mode: 'cors',
                    cache: 'default'
                };
                console.log(envoi);

                //Envoi du formulaire d'inscription
                fetch("http://localhost:3000/api/user/login", envoi)
                .then(res => res.json())
                .then(response => {
                    console.log(response)
                    localStorage.setItem('idUser', response.idUser);
                    localStorage.setItem('pseudo', response.pseudo);
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('idDroit', response.idDroit);
                    location.replace('http://localhost:8080/forum');
                })                                                               
                .catch(error => alert("Erreur : " + error));
            }
        }
    }
})
</script>

<style scoped lang="scss">
@media screen and (min-width: 768px) and (max-width: 2500px) {
    .login{
        height: 600px;        
    }
}
</style>
