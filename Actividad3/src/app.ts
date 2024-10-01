// src/app.ts

import express from 'express';
import pacienteRoutes from './routes/pacienteRoutes';
import platoRoutes from './routes/platoRoutes';
import registroRoutes from './routes/registroRoutes';

const app = express();
const port = process.env.PORT || 3001;


app.use(express.json());

// Rutas
app.use('/api', pacienteRoutes);
app.use('/api', platoRoutes);
app.use('/api', registroRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
