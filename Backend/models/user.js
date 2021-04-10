const sql = require('../models/db');

const User = function(user){
    this.identifiant = user.identifiant,
    this.pseudo= user.pseudo,
    this.email = user.email,
    this.password = user.password
};

//Route post signup
User.updateById = (user, success, error) => {
    console.log(user)
    sql.query(`UPDATE users SET pseudo = ?, email = ?, password = ? WHERE identifiant = ?`, 
    [user.pseudo, user.email, user.password, user.identifiant],
    (err, res) => {
        if (err){
            console.log("error: ", err);            
            error(err)
        }
        if(res.affectedRows == 0){         
            error(err)           
        } else{
            success()
        }
        
    });
};

//Route delete Profil
User.deleteProfil = (user, success, error) => {
    console.log(user);
    sql.query(`UPDATE users SET pseudo = DEFAULT, email = DEFAULT, password = DEFAULT WHERE identifiant = ?`,
    [user.identifiant], 
    (err, res) => {
        if(err){
            console.log('Erreur lors de la suppression du profil utilisateur', err);
            error(err)
        }
        if(res.affectedRows == 0){         
            console.log("error: ", err)
            error(err)  
      } else {
            console.log('suppression du profil : ',  { identifiant: user.identifiant, ...user })
            success()
      }
    })
};

module.exports = User;