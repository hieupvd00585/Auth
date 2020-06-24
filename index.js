const express = require('express');
const app  = express();
const mongoose = require('mongoose')
// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const personRoute = require('./routes/person')
// Connect to DB

mongoose.connect(
    'mongodb+srv://hieu:phamhieu@cluster0-0dym1.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser:true},
    ()=> console.log('connected db..')
    
)

//Middleware
app.use(express.json())

 //Route Middleware

 app.use('/api/user',authRoute)
 app.use('/api/post',postRoute)
 app.use('/api/person',personRoute)



app.listen(3000,()=>console.log('Server running..')
)