const User = require("../models/user");

const authController = {
    register: async(request,response)=>{
    try {
        //extract details name,email,password
        const {name,email,password} = request.body;

        //check of email exists
        const userExists = await User.findOne({email:email});

        //if user exists return error message
        if (userExists) {
            return response.status(400).json({error:"user already exists"});
        }
         //create new object
         const newUser = new User({
            name,
            email,
            password    
        });

        //save to db
        await newUser.save();
        return response.status(201).json({message:'User created successfully'});
        
    } catch (error) {
        return response.status(500).json({error: error.message});
    }        
    },

    login: async(request,response)=>{
        console.log("login");
        
    },
    logout: async(request,response)=>{

    }  
}

module.exports = authController;