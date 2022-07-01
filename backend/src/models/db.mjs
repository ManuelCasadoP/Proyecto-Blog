import { MongoClient } from "mongodb";

const db = new MongoClient("mongodb://mongo:02oslgMpCYAolLZIIQYq@containers-us-west-72.railway.app:6646")

db.connect(console.log("Conectado a la Base de Datos NOTICIAS"));

export const database = db.db("news");
export const users = database.collection("users");
export const news = database.collection("news");








