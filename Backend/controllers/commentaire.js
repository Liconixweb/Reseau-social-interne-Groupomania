const commentaireModel = require('../models/commentaire');

//Création d'un nouveau commentaire
exports.createCommentaire = (req, res) => {
  console.log("message : ", req.body.message);
  const commentaireReqData = (req.body.message);
  console.log(commentaireReqData);
  if(req.body.message.commentaire.constructor === Object && Object.keys(req.body.message.commentaire).length === 0){
    res.send(400).send({ success: false, message: 'Veuillez remplir un champs' });
  } else {
    console.log("Valeur valide");
    commentaireModel.createCommentaire(commentaireReqData, (err, commentaire) =>{
      if (err)
      res.send(err);
      res.json({ status: true, message: 'Commentaire créé avec succès', data: commentaire.insertId })
    })
  }
};

//Suppression d'un commentaire
exports.deleteCommentaire = (req, res) => {     
  commentaireModel.delete(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "non trouvé") {
          res.status(404).send({
            message: "Commentaire non trouvé avec l'id ${req.params.id}."
          });
        } else {
          res.status(500).send({
            message: "Impossible de supprimer le commentaire avec l'id " + req.params.id
          });
        }
      } else res.send({ message: "Le commentaire a été supprimé avec succès !" });
  });    
};
