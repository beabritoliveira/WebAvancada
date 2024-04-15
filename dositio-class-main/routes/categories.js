/** @type{import('fastify').FastifyPluginAsync<>} */
import createError from '@fastify/error';
export default async function categories(app, options) {
    const InvalidProductError = createError('InvalidProductError', 'Produto Inválido.', 400);
    const catg = app.mongo.db.collection('categories');
    const products = app.mongo.db.collection('products');

    app.get('/categories', 
        {
            config:{
                logMe: true
            }
        },
        async (request, reply) =>{
            return await catg.find().toArray(); 
            // encontra todos os itens no banco de dados que pertencem a categories
        }
    )

    app.post('/categories', {
        config:{
            requireAuthentication: true,
            isAdmin: true
        },
        schema:{
            body:{
                type: 'object',
                properties:{
                    id: { type: 'string' },
                    name: { type: 'string' },
                    img_url: { type: 'string' }
                },
                required: ['name', 'img_url']
            }
        }
    },  async (request, reply) =>{
        let categoria = request.body;
        await catg.insertOne(categoria); // insere um item no banco de dados
        return reply.code(201).send(); //Manda um status code de sucesso / created
    })

    app.put('/categories/:id', {
        schema:{
            body:{
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    name: { type: 'string' },
                    img_url: { type: 'string' }
                },
                required: ['name', 'img_url']
            }
        }, config: {
            requireAuthentication: true,
            isAdmin: true
        }
    }, async (request, reply) =>{
        let ident =  request.params.id;
        let categoria = request.body;

        await catg.updateOne({
            _id: new app.mongo.ObjectId(ident)
        }, {
            //atualização dos dados da categoria
            $set: {
                name: categoria.name,
                img_url: categoria.img_url
            }
        })
    }
    )

    app.delete('/categories/:id', {
        config: {
            requireAuthentication: true,
            isAdmin: true
        }
    }, async (request, reply) => {
        let ident = request.params.id;
        await catg.deleteOne( { _id: new app.mongo.ObjectId(ident)} )
        return reply.code(200).send()
    }
    )

    app.get('/categories/:id/products', {
    config: { logMe: true }
    },
    async (request, reply) => {
        let ident = request.params.id;
        return await products.find({
            cat_name: ident
            
        }).toArray()

    }
    )

}