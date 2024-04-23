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
                isAdm: {type: 'boolean'}
            },
            required: ['username', 'email', 'password']
        }
    }
    , async (request, reply) => {
        const userN = request.body.username;
        const userEm = request.body.email;
        const cryptPassw = app.jwt.sign(request.body);
        var isAdmin
        if(request.body.isAdm) isAdmin = true 
        else isAdmin = false
        await user.insertOne({username: userN, email: userEm, token: cryptPassw, isAdm: isAdmin});
        return reply.code(201).send();
    })
}