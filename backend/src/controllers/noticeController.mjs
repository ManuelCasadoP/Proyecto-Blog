import { db } from "../models/db.mjs";

export function getOneNoticeController (request, response){

    db.all(
        `SELECT id, name FROM notices`,
        (err, data)=>{
            if (err){
                console.log(`Algo ha funcionado mal...`, err);
                response.status(500).send(`<b>Algo ha funcionado mal...<br>${err}</b>`);
            } else {
                response.json(data);
                console.log(data);
            }
        });
}

export function getAllNoticesController (request, response){

    db.all(
        `SELECT title, date, summary, content FROM notices`,
        (err, data)=>{
            if (err){
                console.log(`Algo ha funcionado mal...`, err);
                response.status(500).send(`<b>Algo ha funcionado mal...<br>${err}</b>`);
            } else {
                response.json(data);
                console.log(data);
            }
        });
}

export function postNoticeController (request, response) {
    
    const { title, date,summary, content } = request.body;

        db.run(
        `INSERT INTO notices(title, date, summary, content) VALUES ("${title}", "${date}", "${summary}", "${content}")`,
            (err)=>{
                if (err) {
                    console.log(`Algo ha funcionado mal...`, err);
                    response.status(500).send(`<b>Algo ha funcionado mal:<br>${err}</b>`);
                        } else {
                            console.log("Noticia añadida a BBDD");
                            response.status(201).send(`<b>Solicitud Aceptada<br>
                                                       <br>La noticia se ha añadido correctamente a la Base de Datos.</b>`);
                        }
            }
        )
}
        

