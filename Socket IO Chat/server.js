let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})


io.on("connection",(socket)=>{
    console.log("client connected to the server");



    socket.on("chat",(msg)=>{
        console.log(msg);
    })

    socket.on("chat1", (msg1) =>{
        console.log(msg1);
    })

    
})


http.listen(9060,()=>console.log(`server running on port number 9060`));