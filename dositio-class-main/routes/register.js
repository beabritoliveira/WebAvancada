/** @type{import('fastify').FastifyPluginAsync<>} */
export default async function registro(app, options) {
    const user = app.mongo.db.collection('users');

    app.post('/register', 
    {
        schema:{
            type: 'object',
            properties: {
                username: {type: 'string'},
                email: {type: 'string'},
                password: {type: 'string'}
            },
            required: ['username', 'email', 'password']
        }
    }
    , async (request, reply) => {
        const userN = request.body.username;
        const userEm = request.body.email;
        const cryptPassw = app.jwt.sign(request.body);
        if(await user.findOne({email: userEm})){
            return reply.code(400).send();
        }
        else{
            await user.insertOne({username: userN, email: userEm, token: cryptPassw, isAdm: false});
            return reply.code(201).send();
        }
    })
}