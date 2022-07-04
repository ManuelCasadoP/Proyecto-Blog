import { MongoClient } from "mongodb";

const db = new MongoClient(process.env.URL_db)

db.connect(console.log("Conectado a la Base de Datos NOTICIAS"));

export const database = db.db("news");
export const users = database.collection("users");
export const news = database.collection("news");








