const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://abhijeetsahu2003:ILoveDibyadisha@cluster0.alitqkg.mongodb.net/skd?retryWrites=true&w=majority';

mongoose.connect(mongoURI,{ useNewUrlParser: true }).then(()=>{
    console.log("Connection Successfull");
}).catch((e)=>{
    console.log("No Connection");
})