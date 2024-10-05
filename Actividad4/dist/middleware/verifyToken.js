"use strict";
// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtSecret = process.env.JWT_SECRET || 'secret';
const verifyToken = (req, res, next) => {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
    if (!token) {
        res.status(401).json({ message: 'No token provided' });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, jwtSecret);
        // Agregar user al objeto de request sin extender el tipo Request
        req.user = {
            id: decoded.id,
            nombre: decoded.nombre,
            estado: decoded.estado,
        };
        next(); // Continuamos con el siguiente middleware o ruta
    }
    catch (error) {
        console.error('Token verification error:', error);
        res.status(403).json({ message: 'Token invalid or expired' });
        return;
    }
};
exports.default = verifyToken;
