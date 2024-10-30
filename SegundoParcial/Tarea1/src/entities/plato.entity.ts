import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Registro } from './registro.entity';

@Entity()
export class Plato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('float')
  precio: number;

  @Column()
  categoria: string;

  @Column()
  descripcion: string;

  @OneToMany(() => Registro, (registro) => registro.Plato)
  registros: Registro[];
}
