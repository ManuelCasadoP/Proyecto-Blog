import express from "express";
import { getOneNoticeController, getAllNoticesController, postNoticeController } from "./controllers/noticesController.mjs";
const PATH_PREFIX = "/api/v0.0"
const PORT = 3000;
const app = express();

try {
    app.use(express.json())  

    // EndPoints para /NOTICES/

    app.get(PATH_PREFIX+"/notice/id_notice", getOneNoticeController)

    app.get(PATH_PREFIX+"/notices/", getAllNoticesController)

    app.post(PATH_PREFIX+"/notice/", postNoticeController);
    
    

    app.listen(PORT,()=>{
        console.log(`Servidor Express funcionando en puerto ${PORT}`);
    });

} catch {
    console.log(`Algo ha funcionado mal...`);
    response.status(500).send(`<b>Algo ha funcionado mal...</b>`); 
}    