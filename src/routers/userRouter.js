import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: "Rota GET /user" })
})

router.put('/', (req, res) => {
  res.json({ message: "Rota PUT /user" })
})

router.patch('/', (req, res) => {
  res.json({ message: "Rota PATCH /user" })
})

router.post('/', (req, res) => {
  res.send('Teste método POST')
})

router.delete('/', (req, res) => {
  res.json({ message: "Rota DELETE /user" })
})

export default router