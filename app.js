import fastify from 'fastify';
import createError from '@fastify/error';
import autoload from '@fastify/autoload';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import jwt from '@fastify/jwt';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const MyCustomError = createError('MyCustomError', 'Something stranged happened.', 501);

export async function build(opts){
    const app = fastify(opts);
    
    await app.register(jwt,{
        secret: opts.jwt_secret
    })

    await app.register(autoload, {
        dir: join(__dirname , 'hooks'),
        encapsulate: false
    })
    await app.register(autoload, {
        dir: join(__dirname , 'routes')
    })

    app.get('/error', (request, reply) => {
        throw new MyCustomError();
    });
 

    app.setErrorHandler(async (error, request, reply) => {
        const  { validation } = error;
        request.log.error({ error });
        reply.code(error.statusCode || 500);

        
        return validation ? `Validation Error: ${validation[0].message}.` : 'Internal Server Error';
    });

    app.get('/notfound', async (request, reply) => {
        request.log.info('Sending to not found handler.');
        reply.callNotFound();
    });

    app.setNotFoundHandler(async (request, reply) => {
        reply.code(404);
        return 'Resource not found.';
    });

    return app;
}