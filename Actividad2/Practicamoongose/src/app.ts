import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './db';
import { Paciente } from './modelos/paciente.model';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

connectToDatabase();

app.get('/pacientes', async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
