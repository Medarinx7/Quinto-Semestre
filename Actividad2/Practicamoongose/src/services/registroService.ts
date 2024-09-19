import { Registro } from '../modelos/registro.model';
import { IRegistro } from '../interfaces/registro.interface';

// Crear un nuevo registro
export const crearRegistro = async (registroData: IRegistro) => {
  const registro = new Registro(registroData);
  return await registro.save();
};

// Obtener todos los registros
export const obtenerRegistros = async () => {
  return await Registro.find().populate('pacienteId').populate('platoId');
};

// Obtener un registro por su ID
export const obtenerRegistroPorId = async (id: string) => {
  return await Registro.findById(id).populate('pacienteId').populate('platoId');
};

// Actualizar un registro por su ID
export const actualizarRegistro = async (id: string, actualizaciones: Partial<IRegistro>) => {
  return await Registro.findByIdAndUpdate(id, actualizaciones, { new: true });
};

// Eliminar un registro por su ID
export const eliminarRegistro = async (id: string) => {
  return await Registro.findByIdAndDelete(id);
};
