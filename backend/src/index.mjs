import express from "express";
import { getOneNewsController, getAllNewsController, postNewsController, putNewsController, deleteNewsController } from "./controllers/newsController.mjs";
const PATH_PREFIX = "/api/v0.0"
const PORT = 4000;
const app = express();

try {
    app.use(express.json())  

    // EndPoints para /news/

    app.get(PATH_PREFIX+"/news/id_news", getOneNewsController)

    app.get(PATH_PREFIX+"/news/", getAllNewsController)

    app.post(PATH_PREFIX+"/news/", postNewsController);

    app.put(PATH_PREFIX+"/news/id_news", putNewsController);

    app.delete(PATH_PREFIX+"/news/id_news", deleteNewsController);
    
    

    app.listen(PORT,()=>{
        console.log(`Servidor Express funcionando en puerto ${PORT}`);
    });

} catch {
    console.log(`Algo ha funcionado mal...`);
    response.status(500).send(`<b>Algo ha funcionado mal...</b>`); 
}    