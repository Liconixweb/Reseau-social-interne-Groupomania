<template>
    <div class="form-row rounded bg-transparent shadow justify-content-center m-0 pb-0">    
        <Header/>
        <form id="signup" @submit.prevent="submitFormSignup" class="row justify-content-center was-validated needs-validation" novalidate>
            <div class="form-group col-10 col-md-10 m-0 p-0">
                <label for="identifiant"></label> 
                <input type="text" name="identifiant" id="identifiant" class="form-control form-control-lg" placeholder="Identifiant" v-model="identifiant" pattern="[0-9]{4}" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir votre identifiant de salarié</div>
            </div>
            <div class="form-group col-10 col-md-10 m-0 p-0">
                <label for="pseudo"></label> 
                <input type="text" name="pseudo" id="pseudo" class="form-control form-control-lg" placeholder="Pseudonyme" v-model="pseudo" pattern="[A-Za-z\s\-éöàäèüáúóêûîôâ']{2,10}" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir un pseudonyme</div>
            </div>
            <div class="form-group col-10 col-md-10 m-0 p-0">
                <label for="email"></label> 
                <input type="email" name="email" id="email" class="form-control form-control-lg" placeholder="Email" v-model="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir un email</div>
            </div>
            <div class="form-group col-10 col-md-10 m-0 p-0">
                <label for="password"></label> 
                <input type="password" name="password" id="password" class="form-control form-control-lg" placeholder="Mot de passe" v-model="password" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir un mot de passe fort contenant entre 8 et 15 caractères avec au moins, 1 lettre minuscule, 1 lettre majuscule, 1 chiffre et 1 caractère spécial</div>
            </div>
            <div class="form-group col-6 col-md-7 col-lg-9 col-xl-11 mb-4 text-center">
                <button type="submit" @click.prevent="submitFormSignup" class="btn btn-secondary btn-lg col-12 col-md-5 mt-3 ">S'inscrire</button>
            </div>            
        </form>
    </div>
</template>

<script>
import Header from '@/components/Header'
import axios from 'axios'
export default {
    name: 'signup',
    components: {
      Header
    },
    data(){
        return {
            identifiant: '',
            pseudo: '',
            email: '',
            password: ''
        }
    },
    methods:{
        submitFormSignup: function (){

            //Vérification par regex du formulaire d'inscription
            let identifiant = this.identifiant;
            let regexIdentifiant = /[0-9]{4}/g;
            let pseudo = this.pseudo;
            let regexPseudo = /[A-Za-z\s\-éöàäèüáúóêûîôâ']{2,10}/g;
            let email = this.email;
            let regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g;
            let password = this.password;
            let regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/g;
            if((regexIdentifiant.test(identifiant) === true)
                && (regexPseudo.test(pseudo) === true)
                && (regexEmail.test(email) === true)
                && (regexPassword.test(password) === true)
            ){
                let profil = {
                    identifiant: identifiant,
                    pseudo: pseudo,
                    email: email,
                    password: password
                };

                console.log(profil)

                //Envoi du formulaire d'inscription
                axios.post("http://localhost:3000/api/user/signup", JSON.stringify({
                    identifiant: identifiant,
                    pseudo: pseudo,
                    email: email,
                    password: password
                }), {
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                .then(response => {
                    console.log(response);
                    location.replace('http://localhost:8080/login')
                })  
                .catch(error => alert("Erreur : " + error));
            } else{
                alert("Veuillez vérifier vos informations, le formulaire d'inscription n'est pas valide.")
            }
        }
        
    },
}
</script>

<style lang="scss">
.valid-feedback{
    color: #56FE7F;
}
.invalid-feedback{
    color: #FAD8D8;
}

</style>
