import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { UpdateRegistroDto } from './dto/update-registro.dto';

// Datos simulados
const pacientes = [
  { Id: 1, Nombre: 'Olmedo', identificacion: 1316811734 },
  { Id: 2, Nombre: 'Marcos', identificacion: 1316811735 },
  { Id: 3, Nombre: 'Jonny Pérez', identificacion: 1316811736 },
];

const platos = [
  { Id: 1, Nombre: 'Arroz con Pollo' },
  { Id: 2, Nombre: 'Ensalada César' },
  { Id: 3, Nombre: 'Pizza Margarita' },
];

const Registros = [
  {
    Id: 1,
    IdPlato: 1,
    IdPaciente: 1,
    Fecha: '2024-01-12',
    Hora: '12:08:16',
    NumeroDeCaloriasConsumidas: 100,
    NumeroDePorciones: 1,
  },
  {
    Id: 2,
    IdPlato: 2,
    IdPaciente: 2,
    Fecha: '2024-01-15',
    Hora: '15:08:16',
    NumeroDeCaloriasConsumidas: 200,
    NumeroDePorciones: 2,
  },
];

@Injectable()
export class RegistroService {
  // Crear un nuevo registro
  create(createRegistroDto: CreateRegistroDto) {
    const paciente = pacientes.find((p) => p.Id === createRegistroDto.idPaciente);
    if (!paciente) {
      throw new HttpException('Paciente no encontrado', HttpStatus.NOT_FOUND);
    }

    const plato = platos.find((p) => p.Id === createRegistroDto.idPlato);
    if (!plato) {
      throw new HttpException('Plato no encontrado', HttpStatus.NOT_FOUND);
    }

    const newRegistro = {
      Id: Registros.length + 1, // Generar un nuevo ID
      IdPaciente: createRegistroDto.idPaciente,
      IdPlato: createRegistroDto.idPlato,
      Fecha: createRegistroDto.Fecha,
      Hora: createRegistroDto.Hora,
      NumeroDeCaloriasConsumidas: createRegistroDto.NumeroDeCaloriasConsumidas,
      NumeroDePorciones: createRegistroDto.NumeroDePorciones,
      pacientes: paciente,
      platos: plato,
    };

    Registros.push(newRegistro);
    return newRegistro;
  }

  // Obtener todos los registros
  findAll() {
    return Registros;
  }

  // Obtener un registro por ID
  findOne(id: number) {
    const registro = Registros.find((c) => c.Id === id);
    if (!registro) {
      throw new HttpException(`Registro con ID #${id} no encontrado`, HttpStatus.NOT_FOUND);
    }
    return registro;
  }

  // Actualizar un registro
  update(id: number, updateRegistroDto: UpdateRegistroDto) {
    const registroIndex = Registros.findIndex((c) => c.Id === id);
    if (registroIndex === -1) {
      throw new HttpException(`Registro con ID #${id} no encontrado`, HttpStatus.NOT_FOUND);
    }

    const updatedRegistro = {
      ...Registros[registroIndex],
      ...updateRegistroDto,
    };

    Registros[registroIndex] = updatedRegistro;
    return updatedRegistro;
  }

  // Eliminar un registro
  remove(id: number) {
    const registroIndex = Registros.findIndex((c) => c.Id === id);
    if (registroIndex === -1) {
      throw new HttpException(`Registro con ID #${id} no encontrado`, HttpStatus.NOT_FOUND);
    }
    const [removedRegistro] = Registros.splice(registroIndex, 1);
    return { message: 'Registro eliminado correctamente', registro: removedRegistro };
  }
}
