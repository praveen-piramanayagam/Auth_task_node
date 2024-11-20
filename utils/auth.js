const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = {
    isAuthenticated : (request,response,next)=>{
    try {
        //extract token from cookies
        const token = request.cookies.token;
        // console.log(token);
        // if token is not present , return error message
        if(!token){
            return response.status(401).json({message:'Unauthorised'});
        }
        //verify the token
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        //set the userid in the request object
        request.userId = decoded.id;

        //call next middleware
        next();
    } catch (error) {
        
    }
}
}
module.exports = auth;