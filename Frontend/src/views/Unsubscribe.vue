<template>
    <div class="unsubscrive form-row rounded bg-transparent shadow justify-content-center">   
        <Header/>
        <form id="unsubscribe" @submit.prevent="submitFormUnsubscribe" class="row justify-content-center was-validated needs-validation" novalidate>
            <div class="form-group col-9 col-md-10 m-0">
                <label for="identifiant"></label> 
                <input type="text" name="identifiant" id="identifiant" class="form-control form-control-lg" placeholder="Identifiant" v-model="identifiant" pattern="[0-9]{4}" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir votre identifiant de salarié</div>
            </div>
            <div class="form-group col-9 col-md-10 m-0">
                <label for="email"></label> 
                <input type="email" name="email" id="email" class="form-control form-control-lg" placeholder="Email" v-model="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir votre email</div>
            </div>
            <div class="form-group col-9 col-md-10 m-0">
                <label for="password"></label> 
                <input type="password" name="password" id="password" class="form-control form-control-lg" placeholder="Mot de passe" v-model="password" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir votre mot de passe</div>
            </div>
            <div class="form-group col-8 col-md-8 col-lg-9 col-xl-11 mb-4 text-center">
                <button type="submit" @click.prevent="submitFormUnsubscribe" class="btn btn-secondary btn-lg col-12 col-md-5 mt-3 mb-2">Se désinscrire</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import Header from '@/components/Header'
export default ({
    name: 'unsubscribe', 
    components: {
      Header
    },
    data(){
        return {
            identifiant: '',
            email: '',
            password: ''
        }
    },
    methods:{
        submitFormUnsubscribe: function (){

            let identifiant = this.identifiant;
            let email = this.email;
            let password = this.password;
            if((identifiant === "")
                && (email === "") 
                && (password === "")
            ){
                alert ("Veuillez s'il vous plaît, indiquer votre identifiant, votre email et votre mot de passe valide ! ")
            } else{
                let unsubscribe = {
                    identifiant: identifiant,
                    email: email, 
                    password: password
                };
                console.log(unsubscribe);

                //Envoi du formulaire pour la désincription
                axios.post("http://localhost:3000/api/user/delete", JSON.stringify({
                    identifiant: identifiant,
                    email: email,
                    password: password
                }), {
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                .then(response => {
                    console.log(response);
                    localStorage.clear();
                    location.replace('http://localhost:8080');
                })  
                .catch(error => alert("Erreur : " + error));
            }
        }
    }
})
</script>

<style scoped lang="scss">
@media screen and (min-width: 768px) and (max-width: 2500px) {
    .unsubscrive{
        height: 600px;        
    }
}

</style>