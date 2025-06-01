const bcrypt = require('bcryptjs/dist/bcrypt');
const User = require('../models/userModels');
const jwt = require('jsonwebtoken')

// user registration || sign up


exports.registerUser = async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 9);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(201).json({ message: "user registered successfully" });
    }
    catch (error) {
        res.status(500).send(error)
    }
}


// login
exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user || !await bcrypt.compare(req.body.password, user.password)) {
            return res.status(400).json({ error: 'Invalid credentials' })
        }
        const token = jwt.sign({ username: req.body.username }, 'secretkey')
        res.json({ token })
        res.json(req.body.username);
    } catch (error) {
        res.status(500).send(error);
    }
}