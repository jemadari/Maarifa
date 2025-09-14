import { parse } from "dotenv";
import express, { request, response } from "express";

const app = express();
const router = express.Router();
// json middleware
app.use(express.json())

app.use((request, response, next) => {
    console.log("This is 1st Middleware")
    next();
})

app.use((request, response, next) => {
    console.log("This is 2nd Middleware")
    next();
})

app.use((request, response, next) => {
    console.log("This is 3rd Middleware")
})

app.use((request, response, next) => {
    console.log("This is 4th middleware")
})

const PORT = process.env.PORT || 3000

const users = [
    {id: 1, username: "Hancy", age: "19"},
    {id: 2, username: "Lancy", age: "23"},
    {id: 3, username: "Vancy", age: "54"},
    {id: 4, username: "Dancy", age: "24"},
    {id: 5, username: "Liam", age: "30"},
    {id: 6, username: "Smith", age: "39"},
]

const products = [
    {id: 1, name: "Juice", price: "3$"},
    {id: 2, name: "Mango", price: "2$"},
    {id: 3, name: "Apple", price: "5$"},
    {id: 4, name: "Octopus", price: "50$"},
    {id: 5, name: "Bread", price: "4$"},
    {id: 6, name: "Milk", price: "10$"},
]

app.get("/", (request, response) => {
    response.status(200).send([{
        message: "This is the root page"
    }])
})

router.use("/names", (request, response, next) => {
    response.send("Hello There Am using Router");
})

app.get("/api/users", (request, response) => {
    response.send(users);
})

app.get("/api/users/filter", (request, response) => {
    const filteredUser = users.filter((user) => user.username === "Liam");
    return response.status(200).send(filteredUser)
})

app.get("/api/user/:id", (request, response) => {
    const parsedId = parseInt(request.params.id)

    if(isNaN(parsedId))
        return response.status(400).send([{message: "Bad Request, Invalid Id"}]);

    const user = users.find((user) => user.id === parsedId);
    if(!user)
        return response.sendStatus(404)

    return response.status(200).send(user)
})

app.post("/api/user/create", (request, response) => {
    const { body } = request;
    const newUser = {id: users[users.length - 1].id + 1, ...body}
    users.push(newUser);
    return response.status(200).send(newUser)
})

app.put("/api/user/update/:id", (request, response) => {
    const {
        body, 
        params: {id}
    } = request;

    const parsedId = parseInt(id);

    if(isNaN(parsedId)) return response.sendStatus(400)

    const findUserIndex = users.findIndex((user) => user.id === parsedId);
    if(findUserIndex === -1) return response.sendStatus(404);

    users[findUserIndex] = {id: parsedId, ...body}

    return response.sendStatus(200);
})

app.patch("/api/user/update/:id", (request, response) => {
    const {
        body,
        params: { id }
    } = request;

    const parsedId = parseInt(id);
    if(isNaN(parsedId)) return response.sendStatus(400)

    const findUserIndex = users.findIndex((user) => user.id === parsedId);

    if(findUserIndex === -1) return response.sendStatus(404)

    users[findUserIndex] = { ...users[findUserIndex], ...body}

    return response.sendStatus(200)
})

app.delete("/api/user/:id", (request, response) => {
    const {
        params: { id }
    } = request;

    const parsedId = parseInt(id)

    if(isNaN(parsedId)) return response.sendStatus(400)

    const findUserIndex = users.findIndex((user) => user.id === parsedId);

    if(findUserIndex === -1) return response.sendStatus(404)

    users.splice(findUserIndex, 1)

    return response.sendStatus(200);
})

app.get("/api/products", (request, response) => {
    response.status(200).send(products)
})

// Filter Implementation
app.get("/api/products/filter", (request, response) => {
    const product = products.filter((product) => product.name === "Juice")
    response.status(200).send(product)
})

app.get("/api/product/:id", (request, response) => {
    const parsedId = parseInt(request.params.id);

    if(isNaN(parsedId)) return response.sendStatus(400);

    const product = products.find((product) => product.id === parsedId)

    if(!product) return response.sendStatus(404)

    return response.status(200).send(product);
})

app.post("/api/product/create", (request, response) => {
    const { body } = request;
    const newProduct = {id: products[products.length - 1].id + 1, ...body}
    products.push(newProduct)
    return response.status(201).send(newProduct)
})

app.put("/api/product/update/:id", (request, response) => {
    const {
        body, 
        params: { id }
    } = request;

    const parsedId = parseInt(id)

    if(isNaN(parsedId)) return response.sendStatus(400)

    const findProductIndex = products.findIndex((product) => product.id === parsedId)

    if(findProductIndex === -1) return response.sendStatus(404);

    products[findProductIndex] = {id: parsedId, ...body}

    return response.sendStatus(200);
})

app.patch("/api/product/update/:id", (request, response) => {
    const {
        body, 
        params: { id }
    } = request;

    const parsedId = parseInt(id);

    if(isNaN(parsedId)) return response.sendStatus(400)
    
    const findProductIndex = products.findIndex((product) => product.id === parsedId);

    if(findProductIndex === -1) return response.sendStatus(404);

    products[findProductIndex] = { ...products[findProductIndex], ...body }

    return response.sendStatus(200)
})

app.delete("/api/product/:id", (request, response) => {
    const { params: { id } } = request;

    const parsedId = parseInt(id);

    if(isNaN(parsedId)) return response.sendStatus(400)

    const findProductIndex = products.findIndex((product) => product.id === parsedId);

    if(findProductIndex === -1) return response.sendStatus(404);

    products.splice(findProductIndex, 1);

    return response.sendStatus(200)
})

app.listen(PORT, () => {
    console.log(`The server running at port: ${PORT}`)
})
