const http=require("http")
const app=require("./app")
const Port=process.env.PORT||3000
const server=http.createServer(app)
server.listen(Port,()=>{
    console.log(`server running on port ${Port}`)
})