const express = require('express');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors')
const userRoutes = require('./routes/user');
const forumRoutes = require('./routes/forum');
const commentaireRoutes = require('./routes/commentaire');

const rateLimit = require('express-rate-limit');
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});

require('dotenv').config()

const helmet = require('helmet');

const app = express();

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/user', userRoutes, apiLimiter);
app.use('/api/forum', forumRoutes, apiLimiter);
app.use('/api/commentaire', commentaireRoutes, apiLimiter);

module.exports = app;