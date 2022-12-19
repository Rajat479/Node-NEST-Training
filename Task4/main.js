const express = require('express');
const port = process.env.NODE_PORT || 3000;

const server = express();

server.set('views', __dirname + '/view'); // defaul is views
server.set("view engine", "ejs");


server.use(express.urlencoded({ extended: true }));
server.use(express.json());

let items=[   {Item: "Mobile", Price: 62000},
     { Item: "Laptop", Price: 100000, rating: 4.7},
     { Item: "Video Game", Price: 9000, rating: 4.2},
     { Item: "MacBook", Price: 260000, rating: 4.9}
 ] ;

server.get("/login", (req, res)=>{
    res.render("login", {errorMessage: ""});
});

server.post("/login", (req, res)=>{
    console.log("in post, doing login")
    console.log(req.body)
    if(!!req.body.user && req.body.user===req.body.pass){
        res.render("welcome", {username: req.body.user, results: items })
    } else {
        res.render("login", {errorMessage: "Something bad happenned"});
    }
    
});

server.post("/welcome", (req, res)=>{
    console.log(req.body)
    let date= new Date().toLocaleDateString();
    res.render("invoice", {Username: req.body.Username, Item: req.body.Item, Price: req.body.Price, Date: date})
});

server.listen(port, function(){
    console.log("App is running at: "+port);
})