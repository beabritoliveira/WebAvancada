export default async function musicAlbum(app, options){
    const album = app.mongo.db.collection('musicAlbum');

    app.post('/musicAlbum',
        {
            schema:{
                type: 'object',
                properties: {
                    name: { type: 'string' },
                    artist: { type: 'string' },
                    genre_id: { type: 'string' },
                    year: { type: 'integer'},
                    coverAlbum : {type: 'string'}
                },
                required:['name', 'artist', 'coverAlbum']
            }
        }, async (request, reply) => {
            let alb = request.body;
            await album.insertOne(alb);
            if (reply.code(201)){
                return {
                    'result': "sucess"
                }
            }
        }
    )

    app.get('/musicAlbum', 
        async (request, reply) => {
            return await album.find().toArray();
    })

    app.put('/musicAlbum/:id',{
        schema:{
            type: 'object',
            properties: {
                name: { type: 'string' },
                artist: { type: 'string' },
                genre_id: { type: 'string' },
                year: { type: 'integer'},
                coverAlbum : {type: 'string'}
            }
        },
        config:{
            checkNonExistence: true
        }},
        async(request, reply) => {
            const id = request.params.id;
            const alb = request.body;

            if(alb.name){
                await album.updateOne({_id: new app.mongo.ObjectId(id)},
                    {$set: {
                        name: alb.name
                    }})}
            if(alb.artist){
                await album.updateOne({_id: new app.mongo.ObjectId(id)},
                    {$set: {
                        artist: alb.artist
                    }})}
            if(alb.year){
                await album.updateOne({_id: new app.mongo.ObjectId(id)},
                    {$set: {
                        year: alb.year
                    }})}
            if(alb.coverAlbum){
                await album.updateOne({_id: new app.mongo.ObjectId(id)},
                    {$set: {
                        coverAlbum: alb.coverAlbum
                    }})}

            return reply.code(204).send();
        }
    )

    app.delete('/musicAlbum/:id',
        {config: 
            {checkNonExistence: true}},
        async(request, reply) =>{
            const id = request.params.id;
            await album.deleteOne({_id: new app.mongo.ObjectId(id)});
            return reply.code(204).send();
        }
    )
}
