import express from 'express';
import {
    CartItem,
    Cart
} from './cart-items.js';
import {
    isUndefined
} from 'util';

const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => console.log(`Listening on port: ${port}`));

const cart = new Cart();

// GET /cart-items
//  get a JSON array of all cart items
app.get('/cart-items', (req, res) => {
    res.status(200);
    res.json(cart.items);
});

// GET /cart-items/:id
//  get a JSON object of specified item if found
app.get('/cart-items/:id', (req, res) => {
    let returnItem = cart.getItem(req.params.id);
    if (isUndefined(returnItem)) {
        res.status(404);
    } else {
        res.status(200);
    }
    res.json(returnItem);
});

// POST /cart-items
//  add item to cart items & generate unique id
app.post('/cart-items', (req, res) => {
    cart.addItem(req.body.product, req.body.price, req.body.quantity);
    res.status(201);
    res.json(cart.getItem(cart.items.length - 1));
});

// PUT /cart-items/:id
//  add item to cart items w/ specified id
app.put('/cart-items/:id', (req, res) => {
    cart.items[req.params.id] = new CartItem(req.params.id, req.body.product,
        req.body.price, req.body.quantity);
});

// DELETE /cart-items/:id
//  remove item w/ specified id from cart items
app.delete('/cart-items/:id', (req, res) => {
    let itemIndex = cart.items.findIndex(i => i.id == req.params.id);
    cart.items.splice(itemIndex, 1);
    res.status(204).end();
});