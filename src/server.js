import express from 'express'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import logger from './middlewares/logger.js'
import welcome from './welcome.js'
import routeNotFounded from './routeNotFounded.js'
import { PORT, HOST, ENVIRONMENT } from './config.js'
import errorHandler from './middlewares/errorHandler.js'

const app = express()

app.use(logger)

app.use(express.json());

app.get('/', welcome)
app.use('/user', userRouter)
app.use('/prods', productRouter)
app.use('*', routeNotFounded)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST : HOST + ':' + PORT}`)
})