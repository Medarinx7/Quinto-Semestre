import { RegistroRepository } from '../repositories/registro.repository';
import { RegistroDTO } from '../dtos/registro.dto';

export class RegistroService {
  async obtenerRegistros() {
    return await RegistroRepository.find();
  }

  async crearRegistro(datos: RegistroDTO) {
    const nuevoRegistro = RegistroRepository.create(datos);
    return await RegistroRepository.save(nuevoRegistro);
  }
}
