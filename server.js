import { build } from './app.js';
import dotenv from 'dotenv';
import closeWithGrace from 'close-with-grace';

dotenv.config();

const options = { };

options.logger = process.stdout.isTTY ? { transport : { target: 'pino-pretty'} } : true;
options.jwt_secret = process.env.JWT_SECRET || 'Abc@1234';
const server = await build(options);

const port = process.env.PORT || '3000';
const host = process.env.HOST || '127.0.0.1';

await server.listen({port, host});

closeWithGrace(async ({ signal, err })=> {
    if(err) server.log.error(`Server closing due to an error: ${err.message}`);
    else server.log.info(`${signal} signal received. Shutting down gracefully.`);

    await server.close();
});

