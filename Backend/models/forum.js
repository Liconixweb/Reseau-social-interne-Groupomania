const sql = require('../models/db');

const Forum = function (forum) {
    this.contenuTexte = forum.post,
    this.pseudo = forum.post
};

//Route post Forum
Forum.createForum = (forumReqData, result) => {  
  console.log('modele: ',forumReqData)
  sql.query(`INSERT INTO forums (contenuTexte, contenuDate, pseudoForum, idUser) VALUES (?,NOW(), ?,?)`, 
  [forumReqData.post, forumReqData.pseudo, forumReqData.idUser], 
  (err, res) => {
    if (err) {
      console.log("Erreur lors de l'insertion du forum", err);
      result(null, err);
    } else {
      console.log("Forum créé avec succès");
      result(null, res);
    }
  })
};

//Route delete Forum
Forum.delete =(id, result) => {
  sql.query(`DELETE FROM forums WHERE idForum=?`,
  [id], (err, res) => {
    if(err){
      console.log("Erreur lors de la suppression du forum", err);
      result(null, err);
      return;
    } 
    if (res.affectedRows == 0) {
      //Forum non trouvé avec l'id
      result({ kind: "non trouvé" }, null);
      return;
    }
    console.log("effacer le forum avec l'id: ", id);
    result(null, res);
  });
};

module.exports = Forum;