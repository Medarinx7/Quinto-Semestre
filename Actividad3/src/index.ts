import express, { Request, Response, NextFunction } from 'express';
import prisma from './prismaClient'; // Importamos Prisma correctamente
import pacienteRoutes from './routes/pacienteRoutes';
import platoRoutes from './routes/platoRoutes';
import registroRoutes from './routes/registroRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/api/pacientes', pacienteRoutes);
app.use('/api/platos', platoRoutes);
app.use('/api/registros', registroRoutes);

// Middleware para manejo de errores
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Error en el servidor');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
