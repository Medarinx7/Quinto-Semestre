// src/app.ts
import express from 'express';
import pacienteRoutes from './routes/pacienteRoutes';
import registroRoutes from './routes/registroRoutes';

const app = express();

app.use(express.json()); // Asegúrate de tener este middleware para leer JSON
app.use('/pacientes', pacienteRoutes);
app.use('/registros', registroRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
