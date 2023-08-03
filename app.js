const express = require('express');
const app = express();
const tasks= require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handler')
//middleware

app.use(express.static('./public'))
app.use(express.json()) //bu olmazsa req.body'de data olmaz.
//express.json() is a built in middleware function in Express starting from v4.16.0.
//It parses incoming JSON requests and puts the parsed data in req.body.


//routes


app.use('/api/v1/tasks',tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)
const port= process.env.PORT || 3000;

const start = async () => {
    try {
       await connectDB(process.env.MONGO_URI)
       app.listen(port, console.log(`server is listenin on port: ${port}`))     
    } catch (error) {
        console.log(error)
    }
}

start()