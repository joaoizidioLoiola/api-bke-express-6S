import express from 'express'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import createProd from './controllers/products/createProd.js'
import editNameProd from './controllers/products/editNameProd.js'
import editProd from './controllers/products/editProd.js'

const app = express()
const port = 3002
app.use(express.json());

app.use('/user', userRouter)
app.use('/prods', productRouter)
app.put('/prods', editProd)
app.post('/prods', createProd)
app.patch('/prods/:idProd', editNameProd)

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

