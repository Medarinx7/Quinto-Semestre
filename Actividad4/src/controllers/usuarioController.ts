// // // src/controllers/usuarioController.ts
// // import { Request, Response } from 'express';
// // import bcrypt from 'bcrypt';
// // import jwt from 'jsonwebtoken';
// // import prisma from '../prismaClient';
// // import { IUsuario } from './Interfaces';

// // const JWT_SECRET = process.env.JWT_SECRET || 'tu_clave_secreta';

// // // Función para registrar un usuario
// // export const registrarUsuario = async (req: Request, res: Response) => {
// //     const { nombre, clave, estado }: IUsuario = req.body;

// //     try {
// //         const claveHasheada = await bcrypt.hash(clave, 10);
// //         const usuario = await prisma.usuario.create({
// //             data: {
// //                 nombre,
// //                 clave: claveHasheada,
// //                 estado,
// //             },
// //         });
// //         res.status(201).json({ usuario });
// //     } catch (error) {
// //         console.error('Error al registrar usuario:', error);
// //         res.status(400).json({ error: 'Error al registrar usuario.', details: error });
// //     }
// // };

// // // Función para recordar al usuario (iniciar sesión)
// // export const recordarUsuario = async (req: Request, res: Response) => {
// //     const { nombre, clave }: { nombre: string; clave: string } = req.body;

// //     if (!nombre || !clave) {
// //         return res.status(400).json({ error: 'Nombre y clave son requeridos.' });
// //     }

// //     try {
// //         const usuario = await prisma.usuario.findFirst({ where: { nombre } });

// //         if (!usuario) {
// //             return res.status(401).json({ error: 'Usuario no encontrado.' });
// //         }

// //         if (usuario.estado === 'Inactivo') {
// //             return res.status(401).json({ error: 'Usuario inactivo.' });
// //         }

// //         const esValido = await bcrypt.compare(clave, usuario.clave);
// //         if (!esValido) {
// //             return res.status(401).json({ error: 'Contraseña incorrecta.' });
// //         }

// //         const token = jwt.sign({ id: usuario.id, nombre: usuario.nombre }, JWT_SECRET, { expiresIn: '1h' });
// //         res.status(200).json({ token });
// //     } catch (error) {
// //         console.error('Error al recordar usuario:', error);
// //         res.status(500).json({ error: 'Error al recordar usuario.', details: error });
// //     }
// // };
