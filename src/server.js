import express from 'express'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import createProd from './controllers/products/createProd.js'
import editNameProd from './controllers/products/editNameProd.js'
import editProd from './controllers/products/editProd.js'
import { PORT, HOST, ENVIRONMENT } from './config.js'

const app = express()
app.use(express.json());

app.use('/user', userRouter)
app.use('/prods', productRouter)


app.listen(PORT, () => {
  console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST : HOST + ':' + PORT}`)
})


