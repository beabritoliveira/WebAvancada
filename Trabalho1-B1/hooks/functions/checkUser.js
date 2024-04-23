import { USER_EXIST } from "../../libs/errors.js";

export const checkUser = (app) => async (request, reply) =>{
    const user = app.mongo.db.collection('users');

    if(await user.findOne({email: request.body.email})){
        throw new USER_EXIST();
    }
    return 
}