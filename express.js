import express from "express";

const app = express();

const PORT = process.env.PORT || 3000

app.get("/", (request, response) => {
    response.send("This is the root '/' page");
})

const products = [
    {id: 1, name: "Juice"},
    {id: 2, name: "Water"},
    {id: 3, name: "Cake"},
    {id: 4, name: "Pen"},
    {id: 5, name: "Pencil"},
]

const users = [
    {id: 1, username: "Percy Tau"},
    {id: 2, username: "Zubimendi"},
    {id: 3, username: "Matheo"},
    {id: 4, username: "Raya"},
    {id: 5, username: "Eze"},
]

app.get("/api/products", (request, response) => {
    response.status(200).send(products);
})

app.get("/api/product/:id", (request, response) => {
    const parsedId = parseInt(request.params.id);
    if(isNaN(parsedId))
        return response.status(400).send("Invalid Id");

    const product = products.find((product) => product.id === parsedId);

    if(!product)
        return response.status(404).send(`The product with ${parsedId} id is not found`);
    return response.status(200).send(product);
})

app.get("/api/users", (request, response) => {
    response.status(200).send(users);
})

app.get("/api/user/:id", (request, response) => {
    const parsedId = parseInt(request.params.id);
    
    if(isNaN(parsedId))
        return response.status(400).send("Invalid User Id");

    const user = users.find((user) => user.id === parsedId)
    if(!user)
        return response.sendStatus(404)

    return response.status(200).send(user);
})

app.listen(PORT, () => {
    console.log(`Server Running at port: ${PORT}`);
})