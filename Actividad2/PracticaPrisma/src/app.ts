import express from 'express';
import cors from 'cors';
import { crearPlato } from './futions/crearPlato';
import { consultarPlatos } from './futions/consultarPlato';
import { crearPaciente } from './futions/crearPaciente';
import { consultarPacientes } from './futions/consultarPaciente';
import { crearRegistro } from './futions/crearRegistro';
import { consultarRegistros } from './futions/consultarRegistro';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/plato', async (req, res) => {
  try {
    const nuevoPlato = await crearPlato(req.body);
    res.status(201).json(nuevoPlato);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
});

app.get('/platos', async (req, res) => {
  try {
    const platos = await consultarPlatos();
    res.status(200).json(platos);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
});

app.post('/paciente', async (req, res) => {
  try {
    const nuevoPaciente = await crearPaciente(req.body);
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
});

app.get('/pacientes', async (req, res) => {
  try {
    const pacientes = await consultarPacientes();
    res.status(200).json(pacientes);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
});

app.post('/registro', async (req, res) => {
  try {
    const nuevoRegistro = await crearRegistro(req.body);
    res.status(201).json(nuevoRegistro);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
});

app.get('/registros', async (req, res) => {
  try {
    const registros = await consultarRegistros();
    res.status(200).json(registros);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
