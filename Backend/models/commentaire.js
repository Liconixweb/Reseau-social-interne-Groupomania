const sql = require('../models/db');

const Commentaire = function(commentaire) {
    this.commentaire = commentaire.commentaire,
    this.pseudo = commentaire.pseudo
};

//Route post Commentaire
Commentaire.createCommentaire = (commentaireReqData, result) => {
  console.log('modele: ', commentaireReqData)  
  sql.query(`INSERT INTO commentaires (commentaire, commentaireDate, pseudoCommentaire, idUser, idForum) VALUES(?,NOW(), ?,?, ?)`, 
  [commentaireReqData.commentaire, commentaireReqData.pseudo, commentaireReqData.idUser, commentaireReqData.idForum], 
  (err, res) => {      
      if (err) {
        console.log("Erreur lors de l'insertion d'un commentaire", err);
        result(err, null);
      } else {
        console.log("Commentaire créé avec succès");
        result(null, res);
      }
    })
};

//Route delete Commentaire
Commentaire.delete = (id, result) => {
  sql.query(`DELETE FROM commentaires WHERE idCommentaire = ?`, 
  [id], (err, res) => {
    if (err) {
      console.log("Erreur lors de la suppression du commentaire: ", err);
      result(null, err);
      return;
    }  
    if (res.affectedRows == 0) {
      //Commentaire non trouvé avec l'id
      result({ kind: "non trouvé" }, null);
      return;
    }  
    console.log("effacer le commentaire avec l'id: ", id);
    result(null, res);
  });
};

module.exports = Commentaire;