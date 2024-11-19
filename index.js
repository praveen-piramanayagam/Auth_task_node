const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

mongoose.connect(process.env.DB_URL)

.then(()=>{
    console.log('Connected to DB');
    
    // listen for request
    app.listen(3001,()=>{
      console.log('server 3001');
      
    })
    
})
.catch((error)=>{
    console.log('Error in connection');
    console.log(error);
})

