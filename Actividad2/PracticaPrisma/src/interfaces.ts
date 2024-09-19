import { Interface } from "readline";

  
export interface IPlato {
  id?: number;
  nombre: string;
  precio: number;
  categoria: string;
  descripcion: string;
}

export interface IPaciente {
  id?: number;
  nombre: string;
  identificacion: number;
  periodoDeTiempoActual: string;
  gustos: string;
}

export interface IRegistro {
  id?: number;
  idPlato: number;
  idPaciente: number;
  fecha: Date;
  hora: string;
  numeroCaloriasConsumidas: number;
  numeroPorciones: number;
}
