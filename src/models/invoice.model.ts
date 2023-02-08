import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Client } from "./client.model";
import { User } from "./user.model";

//Tabla factura
@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "float" })
  total: number;

  //Em la tabla hay hora y fecha como se hace ??

  //Fecha de creación
  @CreateDateColumn()
  createdAt: Date;

  //Fecha de actualización
  @UpdateDateColumn()
  updateAt: Date;

  @Column({ type: "enum", enum: ["active", "inactive"], default: "active" })
  status: string;

  //Relacion de muchos a uno con la tabla rol, no se pone columna id porque por debajo hace la relación.
  @ManyToOne(() => Client, (client) => client.invoice)
  client: Client;

  @ManyToOne(() => User, (user) => user.invoice)
  user: User;
}
