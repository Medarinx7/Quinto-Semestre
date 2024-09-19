import { Paciente } from '../modelos/paciente.model';

import { IPaciente } from '../interfaces/paciente.interface';

// Crear un nuevo paciente
export const crearPaciente = async (pacienteData: IPaciente) => {
  const paciente = new Paciente(pacienteData);
  return await paciente.save();
};

// Obtener todos los pacientes
export const obtenerPacientes = async () => {
  return await Paciente.find();
};

// Obtener un paciente por su ID
export const obtenerPacientePorId = async (id: string) => {
  return await Paciente.findById(id);
};

// Actualizar un paciente por su ID
export const actualizarPaciente = async (id: string, actualizaciones: Partial<IPaciente>) => {
  return await Paciente.findByIdAndUpdate(id, actualizaciones, { new: true });
};

// Eliminar un paciente por su ID
export const eliminarPaciente = async (id: string) => {
  return await Paciente.findByIdAndDelete(id);
};
