
const http = require("http");
const { title } = require("process");
const getReq = require("./methods/get-request")
const postReq = require("./methods/post-request")
const putReq = require("./methods/put-request")
const deleteReq = require("./methods/delete-request")
let movies = require("./data/movies.json")
const PORT  = process.env.PORT || 4400;

const server = http.createServer((req, res)=> {
    req.movies = movies ;
    switch(req.method){
        case "GET":
            getReq(req,res);
            break;
        case "POST":
            postReq(req,res);
            break;
        case "PUT":
            putReq(req,res);
            break;
        case "DELETE":
            deleteReq(req,res);
            break;
            default:
                res.statusCode = 404;
                res.setHeader("Content-type", "application/json");
                res.write(JSON.stringify({title: "not Found" , message : "ROUTE NOT FOUND"}))
                res.end();
    }
})

server.listen(PORT , ()=> {
    console.log("server stated on port " , PORT);
})