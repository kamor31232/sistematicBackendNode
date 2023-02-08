import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.model";

//Tabla de Usuario para accesos
@Entity()
export class UserToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  authToken: string;

  @Column({ type: "enum", enum: ["active", "inactive"], default: "active" })
  status: string;

  //Fecha de creación
  @CreateDateColumn()
  createdAt: Date;

  //Fecha de actualización
  @UpdateDateColumn()
  updateAt: Date;

  //Relacion con el usuario

  @ManyToOne(() => User, (user) => user.token)
  user: User;
}
