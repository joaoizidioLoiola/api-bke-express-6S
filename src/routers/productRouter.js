import express from "express";
const routerProds = express.Router();

routerProds.get('/', (req, res) => {
  res.json({ message: "Rota GET /prods" })
})

routerProds.put('/', (req, res) => {
  res.json({ message: "Rota PUT /prods" })
})

routerProds.patch('/', (req, res) => {
  res.json({ message: "Rota PATCH /prods" })
})

routerProds.post('/', (req, res) => {
  res.json({ message: "Rota POST /prods" })
})

routerProds.delete('/', (req, res) => {
  res.json({ message: "Rota DELETE /prods" })
})

export default routerProds