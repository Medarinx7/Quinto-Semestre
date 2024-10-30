import express from 'express';
import { AppDataSource } from './config/data-source';
import registroRoutes from './routes/registro.routes';

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => console.log(error));

const app = express();
app.use(express.json());
app.use('/api', registroRoutes);

export default app;
