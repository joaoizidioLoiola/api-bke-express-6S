import express from 'express'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'

const app = express()
const port = 3000

app.use('/user', userRouter)
app.use('/prods', productRouter)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
// app.get('/', (req, res) => {
//   res.send('Olá Mundo!')
// })

// app.get('/user1', (req, res) => {
//   res.json({
//     nome: "João", idade: "21", email: "joaoizidioloiola@icloud.com"
//   })
// })

