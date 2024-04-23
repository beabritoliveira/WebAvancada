/** @type{import('fastify').FastifyPluginAsync<>} */
import { adminRole } from './functions/adminRole.js';
import { checkUser } from './functions/checkUser.js';
import {checkExistence, extractUser, logMe} from './functions/index.js';

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

        if(routeOptions.config?.logMe){
            routeOptions.onRequest.push(logMe(app));
        }
        if(routeOptions.config?.requireAuthentication){
            routeOptions.onRequest.push(extractUser(app));
        }
        if((routeOptions.url === '/products' || routeOptions.url === '/categories') && routeOptions.method === 'POST'){
            routeOptions.preHandler.push(checkExistence(app));
        }
        if(routeOptions.config?.isAdmin){
            routeOptions.onRequest.push(adminRole(app));
        }
        if((routeOptions.url === '/register') && routeOptions.method === 'POST'){
            routeOptions.preHandler.push(checkUser(app));
        }
    });
}