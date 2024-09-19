"use strict";
// import { PrismaClient } from '@prisma/client';
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
exports.crearPlato = crearPlato;
// const prisma = new PrismaClient();
// async function crearPlato(plato: IPlato) {
//   try {
//     const nuevoPlato = await prisma.plato.create({
//       data: plato,
//     });
//     return nuevoPlato;
//   } catch (error) {
//     console.error('Error al crear el plato:', error);
//     throw error;
//   }
// }
// async function obtenerTodosLosPlatos() {
//   try {
//     const platos = await prisma.plato.findMany();
//     return platos;
//   } catch (error) {
//     console.error('Error al obtener los platos:', error);
//     throw error;
//   }
// }
// export { crearPlato, obtenerTodosLosPlatos };
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function crearPlato(plato) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const nuevoPlato = yield prisma.plato.create({
                data: plato,
            });
            return nuevoPlato;
        }
        catch (error) {
            console.error('Error al crear el plato:', error);
            throw error;
        }
    });
}
