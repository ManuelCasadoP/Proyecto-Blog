//import { validate } from "jsonschema";
/*
import { postUserRegisterSchema } from "../schemas/userSchema.mjs";

export function validateUserRegister ( request, response, next) {
    try {
        const validation = validate(request.body, postUserRegisterSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("<b>USER REGISTER schema error:<br><br> Invalid User data provided</b>");
            console.error("USER REGISTER schema error: \n Invalid User data provided");
        }
    } catch (err) {
        throw "User Register Schema: Error validating data"
    }
}
*/