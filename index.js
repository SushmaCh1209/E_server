const express=require('express')
const mongoose=require("mongoose")
const {ApolloServer,gql}=require('apollo-server-express')

const app=express()
const port=3001
const typeDefs= require('./schema')
const resolvers = require('./resolvers')
const userApiFromRouter= require('./routes/userRoutes')
app.use('/users',userApiFromRouter)
const url = "mongodb+srv://chsushma1209:ZqBndTChSXbGI5GR@cluster0.ckplhi4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
app.use(express.json())
mongoose.connect(url,{UseNewUrlParser:true,
    useUnifiedTopology:true})
    .then(()=>{console.log('DB Connected')})
    .catch((err)=>{console.log(err)})
const server=new ApolloServer({typeDefs,resolvers})
async function StartServer(){
    await server.start()
    server.applyMiddleware({app});
    app.listen(port,()=>{console.log(`Server live at ${port}`)})

}   
const Testing(){
    return 1;
} 
Testing();
StartServer()

