//import { validate } from "jsonschema";

import { postUserLoginSchema } from "../schemas/userSchema.mjs";

export function validateUserLogin ( request, response, next) {
    try {
        const validation = validate(request.body, postUserLoginSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("<b>JSON USER LOGIN schema error:<br><br> Invalid User data provided</b>");
            console.error("JSON USER LOIN schema error: \n Invalid User data provided");
        }
    } catch (err) {
        throw "User Login Schema: Error validating data"
    }
}