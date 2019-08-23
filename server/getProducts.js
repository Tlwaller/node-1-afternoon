const products = require('../products.json');

const getProducts = ('/api/products', (req, res) => {
    if(req.query.price) {
        const items = products.filter(val => val.price >= parseInt(req.query.price));
        return res.status(200).send(items)
    } else {
        res.status(200).send(products)
    }
});

module.exports = getProducts;