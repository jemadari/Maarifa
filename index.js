const http = require("http");
const port = 1000;

http.createServer((req, res) => {
    if(req.url === "/")
    {
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.end(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>home</title>
                </head>
                <body>
                    <h1>Maarifa Home Page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque corporis, a voluptatem necessitatibus autem fugit quae quos cupiditate quisquam distinctio voluptatibus minima labore odit dolores laudantium illo, adipisci molestias.</p>

                    <ul>
                        <li>
                            <a href="/">home</a>
                            <a href="/posts">posts</a>
                            <a href="/names">names</a>
                            <a href="/about">about</a>
                            <a href="/contact">contact</a>
                        </li>
                    </ul>
                </body>
                </html>
            `)
    }
    else if(req.url === "/posts")
    {
        const posts = [
            {
                message : "This is the tutorial on how to use response with JSON response format",
                status: "success"
            },
            {
                message : "This is the tutorial on how to use response with JSON response format",
                status: "success"
            },
            {
                message : "This is the tutorial on how to use response with JSON response format",
                status: "success"
            },
            {
                message : "This is the tutorial on how to use response with JSON response format",
                status: "success"
            }
        ]

        res.writeHead(200, {"Content-Type" : "Application/JSON"});
        res.end(JSON.stringify(posts));
    }
    else if(req.url === "/about")
    {
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.end(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>about</title>
                </head>
                <body>
                    <h1>This is About Page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt nemo totam beatae quia explicabo eaque dolores odio laudantium mollitia. Quia odio reiciendis, reprehenderit vitae praesentium in architecto consequatur voluptate.</p>

                    <ul>
                        <li>
                            <a href="/">home</a>
                            <a href="/posts">posts</a>
                            <a href="/names">names</a>
                            <a href="/about">about</a>
                            <a href="/contact">contact</a>
                        </li>
                    </ul>
                </body>
                </html>
                `)
    }
    else if(req.url === "/contact")
    {
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.end(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>contact</title>
                </head>
                <body>
                    <h1>This is Contact Page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt nemo totam beatae quia explicabo eaque dolores odio laudantium mollitia. Quia odio reiciendis, reprehenderit vitae praesentium in architecto consequatur voluptate.</p>

                    <ul>
                        <li>
                            <a href="/">home</a>
                            <a href="/posts">posts</a>
                            <a href="/names">names</a>
                            <a href="/about">about</a>
                            <a href="/contact">contact</a>
                        </li>
                    </ul>
                </body>
                </html>
                `)
    }
    else if(req.method === 'GET' && req.url === '/names')
    {
        const names = [
            {
                name: "Hancy",
                age: 12
            },
            {
                name: "Lancy",
                age: 12
            },
            {
                name: "Vancy",
                age: 12
            },
            {
                name: "Dancy",
                age: 12
            },
        ]
        res.writeHead(200, {"Content-Type":"Application/JSON"});
        res.end(JSON.stringify(names));
    }
    else {
        res.writeHead(404, {"Content-Type" : "text/html"})
        res.end(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>error page</title>
                </head>
                <body>
                    <h1>This is Error Page</h1>
                    <p>Page Not found!!!</p>

                    <ul>
                        <li>
                            <a href="/">home</a>
                            <a href="/posts">posts</a>
                            <a href="/names">names</a>
                            <a href="/about">about</a>
                            <a href="/contact">contact</a>
                        </li>
                    </ul>
                </body>
                </html>
                `)
    }
}).listen(port, () => {
    console.log("Server running at port: ", port)
})