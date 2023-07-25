const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/students-api" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
    // useFindAndModify:false
}).then( () => {
    console.log("connection is successful");
}).catch( () => {
    console.log("no connection");
})