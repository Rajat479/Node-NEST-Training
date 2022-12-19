const http = require("http");
const fs = require("fs")
const port = process.env.port || 5000;
let server = http.createServer((request, response)=>{
    response.writeHead(200, "Success", {"Content-Type": "text/html"});
    html= fs.readFileSync("./page.html")
    response.end(html);
})
server.listen(port, ()=>{
    console.log("App is running at "+port)
});