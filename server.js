import express from 'express';


const app = express();
const port = 8454;

app.listen(port, () => console.log(`Listening on port: ${port}`));

// GET /cart-items
//  get a JSON array of all cart items

// GET /cart-items/:id
//  get a JSON object of specified item if found

// POST /cart-items
//  add item to cart items & generate unique id

// POST /cart-items/:id
//  add item to cart items w/ specified id

// DELETE /cart-items/:id
//  remove item w/ specified id from cart items