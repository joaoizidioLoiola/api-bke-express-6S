import express from 'express';
import cors from 'cors';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js'; // Adicione esta importação
import { PORT, HOST, ENVIRONMENT } from './config.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Bem vindo a API de Produtos e Usuários' });
});

app.use('/user', userRouter);
app.use('/prods', productRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT === 'production' ? HOST : `${HOST}:${PORT}`}`);
});
