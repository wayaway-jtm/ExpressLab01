import express from 'express';


const app = express();
const port = 8454;

app.listen(port, () => console.log(`Listening on port: ${port}`));

// GET /cart-items
//  get a JSON array of all cart items
app.get('/cart-items', (req, res) => {

});

// GET /cart-items/:id
//  get a JSON object of specified item if found
app.get('/cart-items/:id', (req, res) => {

});

// POST /cart-items
//  add item to cart items & generate unique id
app.post('/cart-items', (req, res) => {
    
});

// POST /cart-items/:id
//  add item to cart items w/ specified id
app.post('/cart-items/:id', (req, res) => {
    
});

// DELETE /cart-items/:id
//  remove item w/ specified id from cart items
app.delete('/cart-items/:id', (req, res) => {
    
});