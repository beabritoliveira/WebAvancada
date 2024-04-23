import { ALREADY_EXISTS } from "../../../libs/errors.js";
export const checkExistence = (app) => async (request, reply) => {
    const products = app.mongo.db.collection('products');
    const catg = app.mongo.db.collection('categories');

    let product = request.body;

    let result = await products.count({name: product.name});
    let r = await catg.count({name: product.name});

    if(result > 0 || r>0) throw new ALREADY_EXISTS();
}