//import express from 'express';
import jwt from 'jsonwebtoken';
import  'dotenv/config';
import { json } from 'express';

export default function authMiddleware (request, response, next) {
    try {
        const [ method, token ] = request.headers.authorization.split(" ")
        console.log()
        console.log(method);
        console.log()
        console.log(token);
        console.log()
        console.log("Hola");
        console.log()
        
        const validAuth = jwt.verify(token, process.env.TOKEN_KEY)
        if ( validAuth ) {
            //const { username } = jwt.decode(token)
            //res.locals["username"] = username // Paso el username para uso en los controllers

            const validacion = JSON.stringify(validAuth);
            console.log(`validAuth: ${validacion}`)
            console.log()
            console.log("Sigo en el middleware")
            console.log()
            const decodedToken = jwt.decode(token)
            console.log(decodedToken)
            console.log()
            console.log("Salgo del Middleware")
            console.log()
            console.log()

            next()            
            
        } else {
            console.log("Token no válido")}
            response.sendStatus(401).send("Token no válido")

    } catch (err) {
        response.sendStatus(401).send("Error en AuthMiddleware")
    }
}

