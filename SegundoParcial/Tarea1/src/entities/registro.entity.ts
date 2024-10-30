import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Plato } from './plato.entity';
import { Paciente } from './paciente.entity';

@Entity()
export class Registro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idPlato: number;

  @Column()
  idPaciente: number;

  @Column()
  fecha: Date;

  @Column()
  hora: string;

  @Column()
  numeroCaloriasConsumidas: number;

  @Column()
  numeroPorciones: number;

  @ManyToOne(() => Plato, (plato) => plato.registros)
  @JoinColumn({ name: 'idPlato' })
  Plato: Plato;

  @ManyToOne(() => Paciente, (paciente) => paciente.registros)
  @JoinColumn({ name: 'idPaciente' })
  Paciente: Paciente;
}
