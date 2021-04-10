const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        console.log('authentification ok')
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'vfvfkohpovdfvdfvuhdzhvlkzehgvzeghvezghvkledv');
        console.log(decodedToken)
        const idUser = decodedToken.idUser;
        if(req.body.idUser && req.body.idUser !== idUser) {
            throw 'idUser non valable !';
        } else {
            next();
        }
    }catch (error) {
        res.status(401).json({ error: error | 'Requête non authentifiée !'});
    }
};
