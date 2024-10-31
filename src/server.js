<<<<<<< HEAD
import express from 'express';
import cors from 'cors';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js'; // Adicione esta importação
import { PORT, HOST, ENVIRONMENT } from './config.js';

const app = express();
=======
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

>>>>>>> f84a56aac7a1d7dad7da184b416d800fc2fbb7dc
app.use(express.json());
app.use(cors());

<<<<<<< HEAD
app.get('/', (req, res) => {
  res.json({ message: 'Bem vindo a API de Produtos e Usuários' });
});

app.use('/user', userRouter);
app.use('/prods', productRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT === 'production' ? HOST : `${HOST}:${PORT}`}`);
});
=======
app.get('/', welcome)
app.use('/user', userRouter)
app.use('/prods', productRouter)
app.use('*', routeNotFounded)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST : HOST + ':' + PORT}`)
})
>>>>>>> f84a56aac7a1d7dad7da184b416d800fc2fbb7dc
