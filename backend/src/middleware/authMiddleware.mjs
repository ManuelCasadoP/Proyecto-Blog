//import express from 'express';
import jwt from 'jsonwebtoken';
import  'dotenv/config';
import { json } from 'express';

export default function authMiddleware (request, response, next) {
    try {
        const [ method, token ] = request.headers.authorization.split(" ")
        console.log(method);
        console.log(token);
        console.log("Hola");
        
        const validAuth = jwt.verify(token, process.env.TOKEN_KEY)
        if ( validAuth ) {
            //const { username } = jwt.decode(token)
            //res.locals["username"] = username // Paso el username para uso en los controllers
            next()
            const validacion = JSON.stringify(validAuth);
            console.log(`validAuth: ${validacion}`)
        } else {
            console.log("Token no válido")}
            response.sendStatus(401).send("Token no válido")

    } catch (err) {
        response.sendStatus(401).send("Error en AuthMiddleware")
    }
}

