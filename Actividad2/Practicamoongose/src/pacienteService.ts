import { Paciente } from './modelos/paciente.model'; // Asegúrate de usar el nombre correcto del archivo de modelo
import { IPaciente } from './interfaces/paciente.interface'; // Asegúrate de usar el nombre correcto del archivo de interfaz

// Función para modificar un paciente por ID
export const modificarPaciente = async (id: string, actualizaciones: Partial<IPaciente>) => {
  try {
    const pacienteModificado = await Paciente.findByIdAndUpdate(id, actualizaciones, { new: true });
    if (!pacienteModificado) {
      throw new Error('Paciente no encontrado');
    }
    return pacienteModificado;
  } catch (error) {
    console.error('Error al modificar el paciente:', error);
    throw error;
  }
};

// Función para eliminar un paciente por ID
export const eliminarPaciente = async (id: string) => {
  try {
    const pacienteEliminado = await Paciente.findByIdAndDelete(id);
    if (!pacienteEliminado) {
      throw new Error('Paciente no encontrado');
    }
    return pacienteEliminado;
  } catch (error) {
    console.error('Error al eliminar el paciente:', error);
    throw error;
  }
};
