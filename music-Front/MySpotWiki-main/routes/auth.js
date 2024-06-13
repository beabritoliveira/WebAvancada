import { NONE_EXISTENT_TOKEN } from '../libs/erros.js';

/** @type{import('fastify').FastifyPluginAsync<>} */
export default async function auth(app, options) {
    const usuar = app.mongo.db.collection('user');
    
    app.post('/auth', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    _id: { type: 'string' },
                    username: { type: 'string' },
                    email: {type: 'string'}
                },
                required: ['username', 'email']
            }
        }
    }, async (req, rep) => {
        let user = req.body;
        let result = await usuar.findOne({email: user.email , username: user.username})
        if (result)
            return {
                'x-access-token': app.jwt.sign(user)
            }
        else
            throw new NONE_EXISTENT_TOKEN();
    });
}