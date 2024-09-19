import { Plato } from '../modelos/plato.model';
import { IPlato } from '../interfaces/plato.interface';

// Crear un nuevo plato
export const crearPlato = async (platoData: IPlato) => {
  const plato = new Plato(platoData);
  return await plato.save();
};

// Obtener todos los platos
export const obtenerPlatos = async () => {
  return await Plato.find();
};

// Obtener un plato por su ID
export const obtenerPlatoPorId = async (id: string) => {
  return await Plato.findById(id);
};

// Actualizar un plato por su ID
export const actualizarPlato = async (id: string, actualizaciones: Partial<IPlato>) => {
  return await Plato.findByIdAndUpdate(id, actualizaciones, { new: true });
};

// Eliminar un plato por su ID
export const eliminarPlato = async (id: string) => {
  return await Plato.findByIdAndDelete(id);
};
