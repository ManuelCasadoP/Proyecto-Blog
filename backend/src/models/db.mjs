import { MongoClient } from "mongodb";
import  'dotenv/config';

const db = new MongoClient(process.env.URL_db)

//db.connect(console.log("Conectado a la Base de Datos NOTICIAS"));

export const database = db.db("news");
export const users = database.collection("users");
export const news = database.collection("news");

async function run() {
    try {
        db.connect(console.log("Conectado a la Base de Datos NOTICIAS"));
      
    } catch {
        console.log(`Algo ha funcionado mal...`);
        response.status(500).send(`<b>Algo ha funcionado mal...</b>`); 
    }
}

run();