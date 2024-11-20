const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authController = {
    register: async (request, response) => {
        try {
            const { name, email, password } = request.body;
    
            // Check if user exists
            const userExists = await User.findOne({ email: email });
            if (userExists) {
                return response.status(400).json({ error: "User already exists" });
            }
    
            // Hash the password
            const hashedpassword = await bcrypt.hash(password, 10);
    
            // Create a new user
            const newUser = new User({
                name,
                email,
                password: hashedpassword
            });
    
            // Save the user to the database
            await newUser.save();
            return response.status(201).json({ message: "User created successfully" });
    
        } catch (error) {
            console.error("Error during registration:", error.message);
            return response.status(500).json({ error: error.message });
        }
    },
    

    login: async(request,response)=>{
        try {
            //get the username and email from request body
            const{email,password} = request.body;
            
            //check if the user exists
            const user = await User.findOne({email: email});  

            //if user doesnot exists
             if(!user){
                return response.status(400).json({message:'User does not exists please register'});
             }

             //check password match
             const passwordIsValid = await bcrypt.compare(password,user.password);

             if(!passwordIsValid){
                return response.status(400).json({message:'Invalid password'});
             }

             //generate a token
             const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
            //  console.log(token);
            //store the token in  the cookie
            response.cookies('token',token, {httpOnly: true});

            return response.status(200).json({message:'Login successfull'});
            } 
            catch (error) {
                console.error("Error during login:", error.message);
                return response.status(500).json({ error: error.message });
                }
    
    },

    logout: async(request,response)=>{
        try {
            //clear the cookie
            response.clearCookie('token');
            return response.status(200).json({message: 'logout successfull'});
        }
        catch (error) {
            console.error("Error during login:", error.message);
            return response.status(500).json({ error: error.message });
            }
    },

    me: async (request,response)=>{
        try {
                //get the userid from request object
                const userId = request.userId;

                //find the user by id
                const user = await User.findById(userId).select('-password -__v -createdAt -updatedAt -_id');

                //return the user details
                return response.status(200).json(user);
                           
        } catch (error) {
            console.error("Error during fetching userdetails", error.message);
            return response.status(500).json({ error: error.message });            
        }
    }
}

module.exports = authController;