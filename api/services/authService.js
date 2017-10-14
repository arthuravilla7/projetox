'use strict'

const jwt = require('jsonwebtoken')
const db = require('../../config/database');
const env = require('../../.env')

function login(req, res, next){
    const login = req.body.login || ''
    const senha = req.body.senha || ''

    db.usuarioAcesso.findOne({
        where: {
            login:{
                $eq: login
            },
            senha:{
                $eq: senha
            } 
        }    
    }). then(function(result){
        if(result){
            const token = jwt.sign(result.dataValues, env.authSecret,{
                expiresIn: '1 day'
            })
            var {login, perfil} = result
            res.json({login, perfil, token})
        }else{
            res.status(400).json("Usuário/senha inválidos!");
        }
    }, function(error){
        res.status(400).json("Usuário/senha inválidos!");
    }) 
  
}

function validateToken(req, res, next){
    const token = req.body.token || ''

    jwt.verify(token, env.authSecret, function(error, decoded){
        return res.status(200).send({valid: !error})
    })
}

module.exports = {
    login, validateToken
}