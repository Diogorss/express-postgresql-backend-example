import bcrypt from 'bcrypt';    
import db from '../models/index.js'
import jwt from 'jsonwebtoken';



const register = async (req, res) => {
    console.log("Registering user", req.body);
    if(!req.body || !req.body.username || !req.body.password){
        return res.status(400).json ({message: 'Username and password are required'});
    }
    const {username , password } = req.body

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    try {
        const savedUser = await db.users.create({
            username,
            password: hashedPassword
        });

        console.log("Saved user:", savedUser);
        return res.status(200).json({message: 'User registered successfully'})
    } catch (error) {
        console.error('Error saving user', error);
        return res.status(500).json({message: 'Error saving user: ${error}'});
    }


    
};

const login = async (req, res) => {
    console.log("logging in user:", req.body);

    if (!req.body || !req.body.username || !req.body.password ) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const { username, password } = req.body;

    try {
        const user = await db.users.findOne ({username}).select('+password');

        if(!user){
            console.error("User not found:", username);
            return res.status(400).json ({message: 'User not found'});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match", isMatch);
        if(!isMatch){
            return res.status(400).json({message: 'Invalid credentials'});
        }

        console.log("User logged in successfully", user.username);
        const token = jwt.sign ({id:user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        return res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error("Error logging in user:", error.message);
        return res.status(500).json({ message: error.message });
    }
};
export default { register, login };

