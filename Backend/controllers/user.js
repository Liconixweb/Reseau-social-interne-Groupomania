const sql = require('../models/db');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const cryptoJS = require("crypto-js");

//Création du profil utilisateur
exports.signup = (req, res, next) => {
    console.log("body: ", req.body);
    sql.query(`SELECT * FROM users WHERE identifiant = ?`, req.body.identifiant, function(error, _result, _fields){
        console.log(_result)
        if (_result.length > 0 ){
            bcrypt.hash(req.body.password, 10)
            .then((hash) => {
                const cipherText = cryptoJS.HmacSHA512(req.body.email, process.env.KEY).toString();
                console.log(cipherText);
                const user = new User({
                    identifiant: req.body.identifiant,
                    pseudo: req.body.pseudo,
                    email: cipherText,
                    password: hash
                })
                console.log(user);
                User.updateById(user, function(){ //sucess
                    res.status(201).json({mes: "utilisateur ajouté avec succés !"})
                }, function(err){ //error
                    res.status(500).json({error: err})
                })               
            })
        } else {
            return res.status(401).json({ message: "impossible de trouver l'utilisateur !" })            
        }
    })
};

//Connexion au profil utilisateur
exports.login = async function(req, res, next){
    const pseudo = req.body.login.pseudo;
    const password = req.body.login.password;
    console.log(req.body);
    console.log(pseudo);
    console.log(password);
    if (pseudo && password){
        sql.query(`SELECT * FROM users WHERE pseudo = ?`, pseudo , function(error, results, fields) {
            if (!results || !(bcrypt.compare(password, results[0].password) )) {
				req.session.loggin = true;
				req.session.pseudo = pseudo;
                req.session.password = password;                         
                res.status(401).json({ 
                    message: 'Mot de passe ou pseudo sont incorrects !'                         
                })                                                         
            } else {
                const idUser = results[0].idUser;
                const idDroit  = results[0].idDroit;
                console.log('ok' + idUser);
                jwt.sign({
                    idUser : idUser,
                    pseudo: pseudo, 
                    idDroit: idDroit
                }, process.env.TOKEN,(err, token)=>{
                    console.log(token)
                    if(err){
                        console.log('error')
                        res.status(400).json({error: 'erreur lors de la génération du token !'})
                    }
                    res.status(200).json({token, idUser : idUser, pseudo, idDroit : idDroit})
                })       
            }
        });
    } else {
        res.send('Merci de rentrer un email et un mot de passe corrects !');
		res.end();
    }
};

//Suppression d'un profil utilisateur
exports.deleteUser = (req, res) => {
    const identifiant = req.body.identifiant;
    const email = req.body.email; 
    const password = req.body.password;
    console.log(req.body);
    console.log(identifiant);
    console.log(email);
    console.log(password);
    if(identifiant && email && password){
        sql.query(`SELECT * FROM users WHERE identifiant = ?`, identifiant , function(error, results, fields) {
            if (!results || !(bcrypt.compare(password, results[0].password) )) {
                res.status(401).json({ 
                    message: 'Mot de passe ou pseudo sont incorrects !'                         
                })                                                         
            } else {
                const user = new User({
                    identifiant: identifiant,
                })
                User.deleteProfil(user, function(){ //sucess
                    res.status(201).json({mes: "utilisateur suupprimé avec succés !"})
                }, function(err){ //error
                    res.status(500).json({error: err})
                })
            }
        })
    } else {
        return res.status(401).json({ message: "impossible de trouver l'utilisateur !" })            
    }
};
