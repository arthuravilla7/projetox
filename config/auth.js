'use strict'

const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = function(req, res, next){
    
    // CORS preflight request
    if(req.method === 'OPTIONS'){
        next()
    }else{
        var token = req.body.token || req.query.token || req.headers['authorization']
        if(!token){
            return res.status(403).json('No token provided')
        }

        jwt.verify(token, env.authSecret, function(error, decoded){
            if(error){
                return res.status(403).json("Failed to authenticate token")
            }
            else{
                //req.decoded = decoded
                next()
            }
        })
    }
}