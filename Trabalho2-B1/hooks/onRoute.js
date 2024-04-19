/** @type{import('fastify').FastifyPluginAsync<>} */
import { checkAuth } from './functions/checkAuth.js';
import { checkMail } from './functions/checkEmail.js';
import { existentUser } from './functions/existentUser.js';

export default async function onRouteHook(app, options) {
    app.addHook('onRoute', (routeOptions) => {
        if(routeOptions.onRequest && !Array.isArray(routeOptions.onRequest)){
            routeOptions.onRequest = [routeOptions.onRequest];
        }else{
            routeOptions.onRequest = [];
        }
        if(routeOptions.preHandler && !Array.isArray(routeOptions.preHandler)){
            routeOptions.preHandler = [routeOptions.preHandler];
        }else{
            routeOptions.preHandler = [];
        }
        if(routeOptions.url === '/user' && routeOptions.method === 'POST'){
            routeOptions.preHandler.push(checkMail(app));
        }
        if(routeOptions.config?.neededAuthentication){
            routeOptions.onRequest.push(checkAuth(app));
        }
        if(routeOptions.config?.checkExistence){
            routeOptions.onRequest.push(existentUser(app));
        }
    });
}