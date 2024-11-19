const authController = {
    register: async(request,response)=>{
        try {
            
            const {name,email,password} = request.body;
        
        } catch (error) {
                return response.status(500).json({error : error.message});
        }
    },
    login: async(request,response)=>{

    },
    logout: async(request,response)=>{

    }
}

module.exports = authController;