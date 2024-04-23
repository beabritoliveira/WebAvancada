import { NOT_AUTHORIZED } from "../../libs/errors.js";
export const adminRole = (app) => async (request, reply) => {
    const user = app.mongo.db.collection('users');
    
    try{
        const check = await user.findOne({token: request.headers['x-access-token']})
        if (check.isAdm){
            return
        }
        else{
            throw new NOT_AUTHORIZED();
        }
    }catch(error){
        request.log.error(error);
        throw new NOT_AUTHORIZED();
    }
    
};