
// import { Request, Response } from 'express';
// import prisma from '../prismaClient';
// import { IRegistro } from './Interfaces';

// export const crearRegistro = async (req: Request, res: Response) => {
//     const { idPlato, idPaciente, fecha, hora, numeroCaloriasConsumidas, numeroPorciones }: IRegistro = req.body;

//     try {
//         const registro = await prisma.registro.create({
//             data: {
//                 idPlato,
//                 idPaciente,
//                 fecha,
//                 hora,
//                 numeroCaloriasConsumidas,
//                 numeroPorciones,
//             },
//         });
//         res.status(201).json({ registro });
//     } catch (error) {
//         res.status(400).json({ error: 'Error al crear registro.' });
//     }
// };

// export const obtenerRegistros = async (req: Request, res: Response) => {
//     try {
//         const registros = await prisma.registro.findMany();
//         res.status(200).json({ registros });
//     } catch (error) {
//         res.status(500).json({ error: 'Error al obtener registros.' });
//     }
// };

// export const obtenerRegistroPorId = async (req: Request, res: Response) => {
//     const { id } = req.params;

//     try {
//         const registro = await prisma.registro.findUnique({ where: { id: Number(id) } });
//         if (!registro) {
//             return res.status(404).json({ error: 'Registro no encontrado.' });
//         }
//         res.status(200).json({ registro });
//     } catch (error) {
//         res.status(500).json({ error: 'Error al obtener registro.' });
//     }
// };

// export const actualizarRegistro = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const { idPlato, idPaciente, fecha, hora, numeroCaloriasConsumidas, numeroPorciones }: IRegistro = req.body;

//     try {
//         const registroActualizado = await prisma.registro.update({
//             where: { id: Number(id) },
//             data: {
//                 idPlato,
//                 idPaciente,
//                 fecha,
//                 hora,
//                 numeroCaloriasConsumidas,
//                 numeroPorciones,
//             },
//         });
//         res.status(200).json({ registroActualizado });
//     } catch (error) {
//         res.status(400).json({ error: 'Error al actualizar registro.' });
//     }
// };

// export const eliminarRegistro = async (req: Request, res: Response) => {
//     const { id } = req.params;

//     try {
//         await prisma.registro.delete({ where: { id: Number(id) } });
//         res.status(204).json(); // Sin contenido
//     } catch (error) {
//         res.status(400).json({ error: 'Error al eliminar registro.' });
//     }
// };


import { Request, Response } from 'express';
import prisma from '../prismaClient';
import { IRegistro } from './Interfaces';

// Crear un nuevo registro
export const crearRegistro = async (req: Request, res: Response) => {
    const { idPlato, idPaciente, fecha, hora, numeroCaloriasConsumidas, numeroPorciones }: IRegistro = req.body;

    try {
        const registro = await prisma.registro.create({
            data: {
                fecha: new Date(fecha), // Asegúrate de que la fecha se esté pasando en el formato correcto
                hora,
                numeroCaloriasConsumidas,
                numeroPorciones,
                Paciente: { connect: { id: Number(idPaciente) } }, // Conectar con el paciente
                Plato: { connect: { id: Number(idPlato) } }, // Conectar con el plato
            },
        });
        res.status(201).json({ registro });
    } catch (error) {
        console.error(error); // Para ver el error en la consola
        res.status(400).json({ error: 'Error al crear registro.' });
    }
};

// Obtener todos los registros
export const obtenerRegistros = async (_req: Request, res: Response) => {
    try {
        const registros = await prisma.registro.findMany({
            include: {
                Paciente: true, // Incluir información del paciente
                Plato: true, // Incluir información del plato
            },
        });
        res.status(200).json({ registros });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener registros.' });
    }
};

// Obtener un registro por ID
export const obtenerRegistroPorId = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const registro = await prisma.registro.findUnique({
            where: { id: Number(id) },
            include: {
                Paciente: true, // Incluir información del paciente
                Plato: true, // Incluir información del plato
            },
        });
        if (!registro) {
            return res.status(404).json({ error: 'Registro no encontrado.' });
        }
        res.status(200).json({ registro });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener registro.' });
    }
};

// Actualizar un registro
export const actualizarRegistro = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { idPlato, idPaciente, fecha, hora, numeroCaloriasConsumidas, numeroPorciones }: IRegistro = req.body;

    try {
        const registroActualizado = await prisma.registro.update({
            where: { id: Number(id) },
            data: {
                fecha: new Date(fecha), // Asegúrate de que la fecha se esté pasando en el formato correcto
                hora,
                numeroCaloriasConsumidas,
                numeroPorciones,
                Paciente: { connect: { id: Number(idPaciente) } }, // Conectar con el paciente
                Plato: { connect: { id: Number(idPlato) } }, // Conectar con el plato
            },
        });
        res.status(200).json({ registroActualizado });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al actualizar registro.' });
    }
};

// Eliminar un registro
export const eliminarRegistro = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await prisma.registro.delete({ where: { id: Number(id) } });
        res.status(204).json(); // Sin contenido
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al eliminar registro.' });
    }
};
