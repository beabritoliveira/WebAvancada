export default async function onRouteHook(app, options){
    const logMe = async (request, reply) => {
        request.log.info(`On request hook for url: ${request.url}.`)
    };

    app.addHook('onRoute', (routeOption) =>{
        if(routeOption.config?.logMe){
            if(!Array.isArray(routeOption.onRequest) && routeOption.onRequest){
                routeOption.onRequest = [routeOption.onRequest];
            }
            else{
                routeOption.onRequest = [];
            }
        }
    })
}