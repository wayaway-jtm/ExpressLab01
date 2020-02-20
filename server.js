"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3333;
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
