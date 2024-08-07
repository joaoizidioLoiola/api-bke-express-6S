import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.get('/user', (req, res) => {
  res.json({
    nome: "João", idade: "21", email: "joaoizidioloiola@icloud.com"
  })
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
