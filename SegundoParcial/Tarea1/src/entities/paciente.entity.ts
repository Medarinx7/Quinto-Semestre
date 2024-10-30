import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Registro } from './registro.entity';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  identificacion: number;

  @Column()
  periodoDeTiempoActual: string;

  @Column()
  gustos: string;

  @OneToMany(() => Registro, (registro) => registro.Paciente)
  registros: Registro[];
}
