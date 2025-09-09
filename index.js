const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const port = 1000;

http.createServer((req, res) => {
    let filename = "";

    if(req.method === "GET" && req.url === "/")
    {
        filename = "index.html";
    } 
    else if(req.method === "GET" && req.url === "/technologies")
    {
        filename = "technologies.html";
    }
    else if(req.method === "GET" && req.url === "/about")
    {
        filename = "about.html";
    }
    else if(req.method === "GET" && req.url === "/contact")
    {
        filename = "contact.html";
    }
    else if(req.method === "POST" && req.url === "/submit")
    {
        let body = '';

        req.on("data", chunk => {
            body += chunk.toString();
        })

        req.on("end", () => {
            let formData = querystring.parse(body);

            console.log("Form Data: ", JSON.parse(formData));
        })
    }
    else {
        filename = "404.html";
    }

    fs.readFile(filename, (err, data) => {

        if(err)
        {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("Server Error!!!😔😔😔");
            return;
        } 
        else {
            res.writeHead(filename === "404.html" ? 404 : 200, {"Content-Type":"text/html"})
            res.end(data)
        }
    })
}).listen(port, () => {
    console.log("Server Start and Running at Port: ", port);
})