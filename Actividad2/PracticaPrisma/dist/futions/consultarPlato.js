"use strict";
// import prisma from '../prisma';
// import { IPlato } from '../interfaces';
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
exports.consultarPlatos = consultarPlatos;
// async function consultarPlatos(): Promise<IPlato[]> {
//   try {
//     const platos = await prisma.plato.findMany();
//     return platos;
//   } catch (error) {
//     console.error('Error al consultar los platos:', error);
//     throw error;
//   }
// }
// export { consultarPlatos };
// src/futions/consultarPlato.ts
// import { PrismaClient } from "@prisma/client";
// import { IPlato } from '../interfaces';
// const prisma = new PrismaClient();
// export async function obtenerTodosLosPlatos(): Promise<IPlato[]> {
//   try {
//     const platos = await prisma.plato.findMany(); // Nota: 'plato' en singular según el esquema
//     return platos.map(plato => ({
//       id: plato.id,
//       nombre: plato.nombre,
//       precio: plato.precio,
//       categoria: plato.categoria,
//       descripcion: plato.descripcion,
//     }));
//   } catch (error) {
//     console.error('Error al obtener los platos:', error);
//     throw error;
//   }
// }
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function consultarPlatos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const platos = yield prisma.plato.findMany();
            return platos;
        }
        catch (error) {
            console.error('Error al consultar los platos:', error);
            throw error;
        }
    });
}
