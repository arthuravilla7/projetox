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
            var {id, login, perfil} = result
            const token = jwt.sign(result.dataValues, env.authSecret,{
                expiresIn: '1 day'
            })
            if(perfil === 0){
                db.empresa.findOne({
                    where:{
                        dados_acesso:{
                            $eq: id
                        }
                    }
                }).then(function(result){
                    var dadosEmpresa = result.dataValues
                    res.status(200).json({login, perfil, token, dadosEmpresa})
                })
            }
            else if(perfil === 1){
                db.profissional.findOne({
                    where:{
                        dados_acesso:{
                            $eq: id
                        }
                    }
                }).then(function(result){
                    var dadosProfissional = result.dataValues
                    res.status(200).json({login, perfil, token, dadosProfissional})
                })
            }
            else if(perfil === 2){
                db.cliente.findOne({
                    where:{
                        dados_acesso:{
                            $eq: id
                        }
                    }
                }).then(function(result){
                    var dadosCliente = result.dataValues
                    res.status(200).json({login, perfil, token, dadosCliente})
                })
            }
        }else{
            res.status(401).json("Usuário/senha inválidos!");
        }
    }, function(error){
        res.status(401).json("Usuário/senha inválidos!");
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