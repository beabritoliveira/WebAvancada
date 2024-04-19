import { test, describe } from 'node:test';
import { equal, deepEqual } from 'node:assert';
import { build, options } from './app.js';

describe('###Tests for Server Configuration', async(t) => {
    test('Testing options configuration file', async (t) => {
        const app = await build(options);

        t.after(async() => {
            await app.close();
        });

        deepEqual(options.stage, 'test');
        deepEqual(options.port, '3000');
        deepEqual(options.host, '127.0.0.1');
        deepEqual(options.jwt_secret, '##jwt_secret##');
        deepEqual(options.db_url, 'mongodb://127.0.0.1/trabalhoB1');
    });
});

describe('###Tests for Unauthenticated Routes', async(t) => {})

describe('###Tests for Authenticated routes', async(t) => {
    /*describe('##Success Requests', async(t) => {
        test('# POST /user', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'POST',
                url: '/user',
                body:{
                    "username": "clarissa",
                    "email": "claris@hotmail.com.br"
                }
            });

            equal(response.statusCode, 201);
        });
        test('# PUT /user/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'PUT',
                url: '/user/6622ca3a8585e6c8a9637894',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJpYSIsImVtYWlsIjoiYmlhQGhvdG1haWwuY29tIiwiaWF0IjoxNzEzNDgzODM4fQ.S9VNBjzcUweZGeHRXN39nOIOXQDKoHc8LEvRgGZ4Gew"
                },
                body:{
                    "isAdmin": true
                }
            });

            equal(response.statusCode, 200);
        });
        test('# DELETE /user/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'DELETE',
                url: '/user/6622ca3a8585e6c8a9637894',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJpYSIsImVtYWlsIjoiYmlhQGhvdG1haWwuY29tIiwiaWF0IjoxNzEzNDgzODM4fQ.S9VNBjzcUweZGeHRXN39nOIOXQDKoHc8LEvRgGZ4Gew"
                }
            });

            equal(response.statusCode, 204);
        });
        test('# DELETE /user', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'DELETE',
                url: '/user',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcmlzY3JldWRlcyIsImVtYWlsIjoibWFyaUBnbWFpbC5jb20iLCJpYXQiOjE3MTM1NTIwNzR9.pa2_UUKrHbK7xLDVbof7BpWDI87LmKpvqmKdm_3SxgA"
                }
            });

            equal(response.statusCode, 204);
        });

    })*/

})