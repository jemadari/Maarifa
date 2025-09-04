// ########################################
//  Handling directories in NodeJs
// ########################################

// const http = require("http");

// const server = http.createServer((req, res) => {
//     if(req.url === "/")
//     {
//         res.writeHead(200, {"content-type": "text/html"})
//         res.end("<h1>This is the home page</h1> <p>Please Press here <a href='/old-page'>Old Page</a> </p>")
//     }
//     else if(req.url === "/old-page")
//     {
//         res.writeHead(301, {location: "/new-page"})
//         res.end()
//     }
//     else if(req.url === "/new-page")
//     {
//         res.writeHead(200, {"content-type": "text/html"})
//         res.end("<h1>This is the New page</h1>");
//     }
//     else {
//         res.writeHead(404, {"content-type" : "text/html"})
//         res.end("<h1>Page not found!!!</h1>")
//     }

// }).listen(3000, () => {
//     console.log("Server Started at port 3000")
// })

// ########################################
// This section is about Global Variable
// ########################################
// global.appName = "Maarifa";

// require("./other");

// console.log(__dirname); // this used to show the current working directory

// console.log(__filename); // this used to show the current working file