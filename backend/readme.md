const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/commerce');

// Define User Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String, 
    password: String
});

const User = mongoose.model('User', userSchema);

const productschema = new mongoose.Schema({
    productName : String 
});

//define product schema

const Product = mongoose.model('Product', productschema)

// User Registration Route
app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        await user.save();
        res.status(201).json({ message: 'User registered' });
    } catch (err) {
        res.status(500).send(err);
    }
});

//add new product 
app.post('/product', async(req, res)=>{
    try{
        const product= new  Product({
            productName:req.body.productName
        });
        await product.save();
        res.status(201).json({message:'product added'});
    }catch (err){
        res.status(500).send(err);
    }
})

// User Login Route
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || !await bcrypt.compare(req.body.password, user.password)) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ username: username }, 'secretkey');
        res.json({ token });
        res.json(user.username);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Products Route
// app.get('/products', async (req, res) => {
//     try {
//         // Dummy data for demonstration; replace with MongoDB fetch in a real app
//         const products = [
//             { id: 1, name: "Trending Shirt", new_price: 29.99, image: "products/hero_image.png", category: "women", rating: 1.5 },
//             // ... more products
//         ];
//         res.json(products);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// admin pannel

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});


// <============================ combined server code ======================================> //