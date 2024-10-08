"use strict";
// import prisma from '../prisma';
// import { IPaciente } from '../interfaces';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultarPacientes = consultarPacientes;
// async function consultarPacientes(): Promise<IPaciente[]> {
//   try {
//     const pacientes = await prisma.paciente.findMany();
//     return pacientes;
//   } catch (error) {
//     console.error('Error al consultar los pacientes:', error);
//     throw error;
//   }
// }
// export { consultarPacientes };
// src/futions/consultarPaciente.ts
// import { PrismaClient } from "@prisma/client";
// import { IPaciente } from '../interfaces';
// const prisma = new PrismaClient();
// export async function obtenerTodosLosPacientes(): Promise<IPaciente[]> {
//   try {
//     const pacientes = await prisma.paciente.findMany(); // Nota: 'paciente' en singular según el esquema
//     return pacientes.map(paciente => ({
//       id: paciente.id,
//       nombre: paciente.nombre,
//       identificacion: paciente.identificacion,
//       periodoDeTiempoActual: paciente.periodoDeTiempoActual,
//       gustos: paciente.gustos,
//     }));
//   } catch (error) {
//     console.error('Error al obtener los pacientes:', error);
//     throw error;
//   }
// }
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function consultarPacientes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pacientes = yield prisma.paciente.findMany();
            return pacientes;
        }
        catch (error) {
            console.error('Error al consultar los pacientes:', error);
            throw error;
        }
    });
}
