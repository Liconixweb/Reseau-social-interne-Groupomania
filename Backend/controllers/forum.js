const sql = require('../models/db');
const forumModel = require('../models/forum');

//Création d'un nouveau forum
exports.createForum = (req, res) => {
  console.log("message : ", req.body.message);
  const forumReqData = (req.body.message);
  console.log(forumReqData);
  if(req.body.message.post.constructor === Object && Object.keys(req.body.message.post).length === 0){
    res.send(400).send({ success: false, message: 'Veuillez remplir un champs' });
  } else {
    console.log("Valeur valide");    
    forumModel.createForum(forumReqData, (err, forum) =>{
      if (err)
      res.send(err);
      res.json({ status: true, message: 'Forum créé avec succès', data: forum.insertId }) 
    })
  }
};

//Suppression d'un forum
exports.deleteForum = (req, res) => {
  forumModel.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "non trouvé") {
        res.status(404).send({
          message: "Commentaire non trouvé avec l'id ${req.params.id}."
        });
      } else {
        res.status(500).send({
          message: "Impossible de supprimer le forum avec l'id " + req.params.id
        });
      }
    } else res.send({ message: "Le forum a été supprimé avec succès !"});
  });
};

//Récupération de tous les forums et commentaires
exports.getAllForums = (req, res) => {
  let index = 0
  sql.query(`SELECT * FROM forums ORDER BY contenuDate DESC`, 
  (err, result) => { 
    if (err) {
      console.log("Erreur lors de la récupération des forums ", err);
      res.status(500).json(err)
    } else{    
      result.forEach(post => {
        sql.query(`SELECT * FROM commentaires WHERE commentaires.idForum = ${post.idForum}`, 
        (err, comments) => { 
          result[index] = {
            ...post,
            comments: comments
          };
          index++
          console.log("post index: ", index, result)
          
          if (index == result.length) {
            res.status(200).json({result});
          }
        })
      })
    }
  });
};
