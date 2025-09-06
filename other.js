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

// am using appName as a global variable from index.js
console.log("This is Our App Name: ", appName)

// const http = require("http");
// const port = 1000;

// http.createServer((req, res) => {
//     if(req.url === "/")
//     {
//         res.writeHead(200, {"Content-Type" : "text/html"})
//         res.end(`
//                 <!DOCTYPE html>
//                 <html lang="en">
//                 <head>
//                     <meta charset="UTF-8">
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <title>home</title>
//                 </head>
//                 <body>
//                     <h1>Maarifa Home Page</h1>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque corporis, a voluptatem necessitatibus autem fugit quae quos cupiditate quisquam distinctio voluptatibus minima labore odit dolores laudantium illo, adipisci molestias.</p>

//                     <ul>
//                         <li>
//                             <a href="/">home</a>
//                             <a href="/posts">posts</a>
//                             <a href="/names">names</a>
//                             <a href="/about">about</a>
//                             <a href="/contact">contact</a>
//                         </li>
//                     </ul>
//                 </body>
//                 </html>
//             `)
//     }
//     else if(req.url === "/posts")
//     {
//         const posts = [
//             {
//                 message : "This is the tutorial on how to use response with JSON response format",
//                 status: "success"
//             },
//             {
//                 message : "This is the tutorial on how to use response with JSON response format",
//                 status: "success"
//             },
//             {
//                 message : "This is the tutorial on how to use response with JSON response format",
//                 status: "success"
//             },
//             {
//                 message : "This is the tutorial on how to use response with JSON response format",
//                 status: "success"
//             }
//         ]

//         res.writeHead(200, {"Content-Type" : "Application/JSON"});
//         res.end(JSON.stringify(posts));
//     }
//     else if(req.url === "/about")
//     {
//         res.writeHead(200, {"Content-Type" : "text/html"})
//         res.end(`
//                 <!DOCTYPE html>
//                 <html lang="en">
//                 <head>
//                     <meta charset="UTF-8">
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <title>about</title>
//                 </head>
//                 <body>
//                     <h1>This is About Page</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt nemo totam beatae quia explicabo eaque dolores odio laudantium mollitia. Quia odio reiciendis, reprehenderit vitae praesentium in architecto consequatur voluptate.</p>

//                     <ul>
//                         <li>
//                             <a href="/">home</a>
//                             <a href="/posts">posts</a>
//                             <a href="/names">names</a>
//                             <a href="/about">about</a>
//                             <a href="/contact">contact</a>
//                         </li>
//                     </ul>
//                 </body>
//                 </html>
//                 `)
//     }
//     else if(req.url === "/contact")
//     {
//         res.writeHead(200, {"Content-Type" : "text/html"})
//         res.end(`
//                 <!DOCTYPE html>
//                 <html lang="en">
//                 <head>
//                     <meta charset="UTF-8">
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <title>contact</title>
//                 </head>
//                 <body>
//                     <h1>This is Contact Page</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt nemo totam beatae quia explicabo eaque dolores odio laudantium mollitia. Quia odio reiciendis, reprehenderit vitae praesentium in architecto consequatur voluptate.</p>

//                     <ul>
//                         <li>
//                             <a href="/">home</a>
//                             <a href="/posts">posts</a>
//                             <a href="/names">names</a>
//                             <a href="/about">about</a>
//                             <a href="/contact">contact</a>
//                         </li>
//                     </ul>
//                 </body>
//                 </html>
//                 `)
//     }
//     else if(req.method === 'GET' && req.url === '/names')
//     {
//         const names = [
//             {
//                 name: "Hancy",
//                 age: 12
//             },
//             {
//                 name: "Lancy",
//                 age: 12
//             },
//             {
//                 name: "Vancy",
//                 age: 12
//             },
//             {
//                 name: "Dancy",
//                 age: 12
//             },
//         ]
//         res.writeHead(200, {"Content-Type":"Application/JSON"});
//         res.end(JSON.stringify(names));
//     } 
//     else if(req.method === 'POST' && req.url === "/submit")
//     {
//         let body = '';

//         req.on("data", chunk => {
//             body += chunk.toString();
//         })

//         req.on("end", () => {
//             console.log("Received Data: ", body);

//             res.writeHead(200, {'Content-Type': "Application/JSON"});
//             res.end(JSON.stringify({message: "Received", data: JSON.parse(body)}))
//         })
//     }
//     else if(req.method === 'PUT' && req.url === "/update")
//     {
//         let body = '';
//         req.on("data", chunk => {
//             body += chunk.toString();
//         })

//         req.on("end", () => {
//             console.log("Received Updated Data: ", body)

//             res.writeHead(200, {'Content-Type':"Application/JSON"});
//             res.end(JSON.stringify({message: "Received Updated Data", data: JSON.parse(body)}))
//         })
//     }
//     else {
//         res.writeHead(404, {"Content-Type" : "text/html"})
//         res.end(`
//                 <!DOCTYPE html>
//                 <html lang="en">
//                 <head>
//                     <meta charset="UTF-8">
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <title>error page</title>
//                 </head>
//                 <body>
//                     <h1>This is Error Page</h1>
//                     <p>Page Not found!!!</p>

//                     <ul>
//                         <li>
//                             <a href="/">home</a>
//                             <a href="/posts">posts</a>
//                             <a href="/names">names</a>
//                             <a href="/about">about</a>
//                             <a href="/contact">contact</a>
//                         </li>
//                     </ul>
//                 </body>
//                 </html>
//                 `)
//     }
// }).listen(port, () => {
//     console.log("Server running at port: ", port)
// })