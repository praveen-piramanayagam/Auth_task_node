const { request } = require("http");
const { response } = require("../app");

const receipeController = {
    getAllReceipes:async(request,response)=>{
        try {
            
        } catch (error) {
            response.status(500).json({message:"error"});
            console.log(error);
            
        }
    },
    getReceipesByID:async(request,response)=>{

    },
    createReceipes:async(request,response)=>{

    },
    updateReceipes:async(request,response)=>{

    },
    deleteReceipes:async(request,response)=>{
        
    }
}
module.exports = receipeController;