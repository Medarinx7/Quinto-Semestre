"use strict";
// import prisma from '../prisma';
// import { IRegistro } from '../interfaces';
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
exports.consultarRegistros = consultarRegistros;
// async function consultarRegistros(): Promise<IRegistro[]> {
//   try {
//     const registros = await prisma.registro.findMany();
//     return registros;
//   } catch (error) {
//     console.error('Error al consultar los registros:', error);
//     throw error;
//   }
// }
// export { consultarRegistros };
// src/futions/consultarRegistro.ts
// import { PrismaClient } from "@prisma/client";
// import { IRegistro } from '../interfaces';
// const prisma = new PrismaClient();
// export async function obtenerTodosLosRegistros(): Promise<IRegistro[]> {
//   try {
//     const registros = await prisma.registro.findMany(); // Nota: 'registro' en singular según el esquema
//     return registros.map(registro => ({
//       id: registro.id,
//       idPlato: registro.idPlato,
//       idPaciente: registro.idPaciente,
//       fecha: registro.fecha,
//       hora: registro.hora,
//       numeroCaloriasConsumidas: registro.numeroCaloriasConsumidas,
//       numeroPorciones: registro.numeroPorciones,
//     }));
//   } catch (error) {
//     console.error('Error al obtener los registros:', error);
//     throw error;
//   }
// }
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function consultarRegistros() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const registros = yield prisma.registro.findMany();
            return registros;
        }
        catch (error) {
            console.error('Error al consultar los registros:', error);
            throw error;
        }
    });
}
