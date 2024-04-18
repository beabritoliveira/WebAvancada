import { test, describe } from 'node:test';
import { equal, deepEqual } from 'node:assert';
import { build, options } from './app.js';

describe('###Tests for Authenticated routes', async(t) => {
    
   describe('##Success Requests', async(t) => {
        test('# POST /categories', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'POST',
                url: '/categories',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlYXRyaXoiLCJlbWFpbCI6ImFiQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE3MTMxMjM0NzF9.Dh0CfzAPFSUR8j-Y3VtKO4fVBewfLE2Ltq5IrxnzCPY"
                },
                body:{
                    "name": "Cerais",
                    "img_url": "https://www.saboresajinomoto.com.br/uploads/images/posts/Graos_1400x675.jpg"
                }
            });
            equal(response.statusCode, 201 || 200);
        });

        test('# PUT /categories/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'PUT',
                url: '/categories/661c6f9d3472c7e357fda4f4',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlYXRyaXoiLCJlbWFpbCI6ImFiQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE3MTMxMjM0NzF9.Dh0CfzAPFSUR8j-Y3VtKO4fVBewfLE2Ltq5IrxnzCPY"
                },
                body:{
                    "name": "Tuberculos",
                    "img_url": "https://www.gestaoeducacional.com.br/wp-content/uploads/2019/01/tuberculos.jpg"
                }
            });
            equal(response.statusCode, 200);
        });

        test('# DELETE /categories/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'DELETE',
                url: '/categories/661c6f9d3472c7e357fda4f4',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlYXRyaXoiLCJlbWFpbCI6ImFiQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE3MTMxMjM0NzF9.Dh0CfzAPFSUR8j-Y3VtKO4fVBewfLE2Ltq5IrxnzCPY"
                }
            });
            equal(response.statusCode, 200);
        });

        
        test('# POST /products', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'POST',
                url: '/products',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlYXRyaXoiLCJlbWFpbCI6ImFiQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE3MTMxMjM0NzF9.Dh0CfzAPFSUR8j-Y3VtKO4fVBewfLE2Ltq5IrxnzCPY"
                },
                body:{
                    "name": "Cajá",
                    "qtd": 24,
                    "cat_name": "661b258b2e32bbfb09bc4418"
                }
            });
            equal(response.statusCode, 201 || 200);
        });

        test('# PUT /products/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'PUT',
                url: '/products/661b3c1ca7ebc1c361149399',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlYXRyaXoiLCJlbWFpbCI6ImFiQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE3MTMxMjM0NzF9.Dh0CfzAPFSUR8j-Y3VtKO4fVBewfLE2Ltq5IrxnzCPY"
                },
                body:{
                    "name": "Tangerina",
                    "qtd": 32,
                    "cat_name": "661b258b2e32bbfb09bc4418"
                }
            });
            equal(response.statusCode, 204);
        });

        test('# DELETE /products/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'DELETE',
                url: '/products/661d79dd34cea387977be591',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlYXRyaXoiLCJlbWFpbCI6ImFiQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE3MTMxMjM0NzF9.Dh0CfzAPFSUR8j-Y3VtKO4fVBewfLE2Ltq5IrxnzCPY"
                }
            });
            equal(response.statusCode, 204);
        });
    });


    describe('##Unathorized Request', async(t) => {
        test('# DELETE /categories/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'DELETE',
                url: '/categories/661b3f9192ea03736328a4d3',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuYSIsImVtYWlsIjoiYW5hQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYWJjZCIsImlhdCI6MTcxMzEyNjMzMX0.EYFX7nXtz8zZQdLAkxGtLl-g34RW4fjkSAFHoShH4bw"
                }
            });
            equal(response.statusCode, 401);
        });

        test('# PUT /categories/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'PUT',
                url: '/categories/661c6f9d3472c7e357fda4f4',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuYSIsImVtYWlsIjoiYW5hQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYWJjZCIsImlhdCI6MTcxMzEyNjMzMX0.EYFX7nXtz8zZQdLAkxGtLl-g34RW4fjkSAFHoShH4bw"
                },
                body:{
                    "name": "Tuberculo",
                    "img_url": "https://www.gestaoeducacional.com.br/wp-content/uploads/2019/01/tuberculos.jpg"
                }
            });
            equal(response.statusCode, 401);
        });

        test('# POST /categories', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'POST',
                url: '/categories',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuYSIsImVtYWlsIjoiYW5hQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYWJjZCIsImlhdCI6MTcxMzEyNjMzMX0.EYFX7nXtz8zZQdLAkxGtLl-g34RW4fjkSAFHoShH4bw"
                },
                body:{
                    "name": "Cerais",
                    "img_url": "https://www.saboresajinomoto.com.br/uploads/images/posts/Graos_1400x675.jpg"
                }
            });
            equal(response.statusCode, 401);
        });

        test('# DELETE /products/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'DELETE',
                url: '/products/661c3ee9fb169cc535fc4eeb',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuYSIsImVtYWlsIjoiYW5hQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYWJjZCIsImlhdCI6MTcxMzEyNjMzMX0.EYFX7nXtz8zZQdLAkxGtLl-g34RW4fjkSAFHoShH4bw"
                }
            });
            equal(response.statusCode, 401);
        });

        test('# PUT /products/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'PUT',
                url: '/products/661b3c1ca7ebc1c361149399',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuYSIsImVtYWlsIjoiYW5hQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYWJjZCIsImlhdCI6MTcxMzEyNjMzMX0.EYFX7nXtz8zZQdLAkxGtLl-g34RW4fjkSAFHoShH4bw"
                },
                body:{
                    "name": "Tangerina",
                    "qtd": 52,
                    "cat_name": "661b258b2e32bbfb09bc4418"
                }
            });
            equal(response.statusCode, 401);
        });

        test('# POST /products', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'POST',
                url: '/products',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuYSIsImVtYWlsIjoiYW5hQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYWJjZCIsImlhdCI6MTcxMzEyNjMzMX0.EYFX7nXtz8zZQdLAkxGtLl-g34RW4fjkSAFHoShH4bw"
                },
                body:{
                    "name": "Jabuticaba",
                    "qtd": "63",
                    "cat_name": "661b258b2e32bbfb09bc4418"
                }
            });
            equal(response.statusCode, 401);
        });
    });
    describe('##Missing Needed Component on Body Request', async(t) => {
        test('# POST /categories', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'POST',
                url: '/categories',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlYXRyaXoiLCJlbWFpbCI6ImFiQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE3MTMxMjM0NzF9.Dh0CfzAPFSUR8j-Y3VtKO4fVBewfLE2Ltq5IrxnzCPY"
                },
                body:{
                    "name": "Laticinios"
                }
            });
            equal(response.statusCode, 400 || 404);
        });

        test('# PUT /categories/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'PUT',
                url: '/categories/661b42267bb6498a21b225b1',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlYXRyaXoiLCJlbWFpbCI6ImFiQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE3MTMxMjM0NzF9.Dh0CfzAPFSUR8j-Y3VtKO4fVBewfLE2Ltq5IrxnzCPY"
                },
                body:{
                    "img_url": "https://www.gestaoeducacional.com.br/wp-content/uploads/2019/01/tuberculos.jpg"
                }
            });
            equal(response.statusCode, 400 || 404);
        });
        
        test('# POST /products', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'POST',
                url: '/products',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlYXRyaXoiLCJlbWFpbCI6ImFiQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE3MTMxMjM0NzF9.Dh0CfzAPFSUR8j-Y3VtKO4fVBewfLE2Ltq5IrxnzCPY"
                },
                body:{
                    "name": "Framboesa",
                    "cat_name": "661b258b2e32bbfb09bc4418"
                }
            });
            equal(response.statusCode, 400 || 404);
        });

        test('# PUT /products/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'PUT',
                url: '/products/661b3c1ca7ebc1c361149399',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlYXRyaXoiLCJlbWFpbCI6ImFiQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE3MTMxMjM0NzF9.Dh0CfzAPFSUR8j-Y3VtKO4fVBewfLE2Ltq5IrxnzCPY"
                },
                body:{
                    "name": "Tangerina",
                    "qtd": 32
                }
            });
            equal(response.statusCode, 400 || 404);
        });
    });
    describe('##Missing X-ACESS-TOKEN on the Header of Request', async(t) => {
        test('# POST /categories', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'POST',
                url: '/categories',
                body:{
                    "name": "Cerais",
                    "img_url": "https://www.saboresajinomoto.com.br/uploads/images/posts/Graos_1400x675.jpg"
                }
            });
            equal(response.statusCode, 401);
        });

        test('# PUT /categories/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'PUT',
                url: '/categories/661c6f9d3472c7e357fda4f4',
                body:{
                    "name": "Tuberculos",
                    "img_url": "https://www.gestaoeducacional.com.br/wp-content/uploads/2019/01/tuberculos.jpg"
                }
            });
            equal(response.statusCode, 401);
        });

        test('# DELETE /categories/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'DELETE',
                url: '/categories/661c6f9d3472c7e357fda4f4',
            });
            equal(response.statusCode, 401);
        });

        test('# POST /products', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'POST',
                url: '/products',
                body:{
                    "name": "Cajá",
                    "qtd": 24,
                    "cat_name": "661b258b2e32bbfb09bc4418"
                }
            });
            equal(response.statusCode, 401);
        });

        test('# PUT /products/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'PUT',
                url: '/products/661b3c1ca7ebc1c361149399',
                body:{
                    "name": "Tangerina",
                    "qtd": 32,
                    "cat_name": "661b258b2e32bbfb09bc4418"
                }
            });
            equal(response.statusCode, 401);
        });

        test('# DELETE /products/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'DELETE',
                url: '/products/661d79dd34cea387977be591'
            });
            equal(response.statusCode, 401);
        });
    });
    describe('##Modifing a non-existence component', async(t) => {
        test('# PUT /categories', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'PUT',
                url: '/categories',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlYXRyaXoiLCJlbWFpbCI6ImFiQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE3MTMxMjM0NzF9.Dh0CfzAPFSUR8j-Y3VtKO4fVBewfLE2Ltq5IrxnzCPY"
                },
                body:{
                    "name": "Tuberculos",
                    "img_url": "https://www.gestaoeducacional.com.br/wp-content/uploads/2019/01/tuberculos.jpg"
                }
            });
            equal(response.statusCode, 404);
        });

        test('# DELETE /categories', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'DELETE',
                url: '/categories',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlYXRyaXoiLCJlbWFpbCI6ImFiQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE3MTMxMjM0NzF9.Dh0CfzAPFSUR8j-Y3VtKO4fVBewfLE2Ltq5IrxnzCPY"
                }
            });
            equal(response.statusCode, 404);
        });
        test('# PUT /products', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'PUT',
                url: '/products',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlYXRyaXoiLCJlbWFpbCI6ImFiQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE3MTMxMjM0NzF9.Dh0CfzAPFSUR8j-Y3VtKO4fVBewfLE2Ltq5IrxnzCPY"
                },
                body:{
                    "name": "Tangerina",
                    "qtd": 32,
                    "cat_name": "661b258b2e32bbfb09bc4418"
                }
            });
            equal(response.statusCode, 404);
        });

        test('# DELETE /products', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'DELETE',
                url: '/products',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlYXRyaXoiLCJlbWFpbCI6ImFiQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE3MTMxMjM0NzF9.Dh0CfzAPFSUR8j-Y3VtKO4fVBewfLE2Ltq5IrxnzCPY"
                }
            });
            equal(response.statusCode, 404);
        });
    });
    describe('##Adding a existence component', async(t) => {
        test('# POST /categories', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'POST',
                url: '/categories',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuYSIsImVtYWlsIjoiYW5hQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYWJjZCIsImlhdCI6MTcxMzEyNjMzMX0.EYFX7nXtz8zZQdLAkxGtLl-g34RW4fjkSAFHoShH4bw"
                },
                body:{
                    "name": "Fruta",
                    "img_url": " "
                }
            });
            equal(response.statusCode, 401 || 412);
        });

        test('# POST /products', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'POST',
                url: '/products',
                headers:{
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuYSIsImVtYWlsIjoiYW5hQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYWJjZCIsImlhdCI6MTcxMzEyNjMzMX0.EYFX7nXtz8zZQdLAkxGtLl-g34RW4fjkSAFHoShH4bw"
                },
                body:{
                    "name": "Manga",
                    "qtd": "63",
                    "cat_name": "661b258b2e32bbfb09bc4418"
                }
            });
            equal(response.statusCode,401|| 412);
        });
    })
});

describe('###Tests for Server Configuration', async(t) => {
    test('Testing options configuration file', async (t) => {
        const app = await build(options);

        t.after(async() => {
            await app.close();
        });

        deepEqual(options.stage, 'test');
        deepEqual(options.port, '3000');
        deepEqual(options.host, '127.0.0.1');
        deepEqual(options.jwt_secret, 'Abcd@1234');
        deepEqual(options.db_url, 'mongodb://127.0.0.1/dositio');
    });
});

describe('###Tests for Unauthenticated Routes', async(t) => {
    
    describe('##Success Requests', async(t) => {
        test('# GET /products', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'GET',
                url: '/products'
            });

            equal(response.statusCode, 200);
        });

        test('# GET /products/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'GET',
                url: '/products/661b3c1ca7ebc1c361149399'
            });

            equal(response.statusCode, 200);
        });

        test('# GET /categories', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'GET',
                url: '/categories'
            });

            equal(response.statusCode, 200);
        });

        test('# GET /categories/:id/products', async(t) => {
            const app = await build(options);
    
            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'GET',
                url: '/categories/661b258b2e32bbfb09bc4418/products'
            });
    
            equal(response.statusCode, 200);
        });

        test('# POST /register', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'POST',
                url: '/register',
                body:{
                    "username": "maria",
                    "email": "maria@gmail.com",
                    "password": "123456"
                }
            });

            equal(response.statusCode, 201 || 200);
        });
    });

    
    describe('##Bad Requests', async(t) => {
        test('# GET /categories/:id', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'GET',
                url: '/categories/661b258b2e32bbfb09bc4418'
            });

            equal(response.statusCode, 404 || 400);
        });
        test('# GET /product', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'GET',
                url: '/product'
            });

            equal(response.statusCode, 404);
        });
        test('# GET /categorie', async(t) => {
            const app = await build(options);

            t.after(async() => {
                await app.close();
            });
            const response = await app.inject({
                method: 'GET',
                url: '/categorie'
            });

            equal(response.statusCode, 404);
        });
    });
        
});

