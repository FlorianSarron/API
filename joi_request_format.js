const joi = require('joi');

const postUserFormat = joi.object({
    name: joi.string().min(0).max(30).required(),
    password: joi.string().min(0).max(30).required(),
});

module.exports.postUserFormat = postUserFormat;

//Définir des schémas d'acceptation des requêtes (pour post & put).