// const { request } = require("http");
// const { response } = require("../app");
const receipe = require('../models/receipe');
const receipeController = {
    getAllReceipes:async(request,response)=>{
        try {
            const receipes = await receipe.find();
            response.status(200).json(receipes);
        } catch (error) {
            response.status(500).json({message:"error"});
            console.log(error);
            
        }
    },
    getReceipesByID:async(request,response)=>{

    },
    createReceipes:async(request,response)=>{
        console.log(request.body);
        
    },
    updateReceipes:async(request,response)=>{

    },
    deleteReceipes:async(request,response)=>{

    }
}
module.exports = receipeController;