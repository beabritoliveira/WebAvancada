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
