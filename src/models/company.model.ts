import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./product.model";
import { User } from "./user.model";

//Tabla compañia o empresa para escalar el proyecto a diferentes direcciones de la empresa
@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 20 })
  nit: string;

  @Column({ length: 150 })
  address: string;

  @Column({ length: 80 })
  email: string;

  @Column({ length: 20 })
  cellphone: string;

  @Column({ type: "enum", enum: ["active", "inactive"], default: "active" })
  status: string;

  //Fecha de creación
  @CreateDateColumn()
  createdAt: Date;

  //Fecha de actualización
  @UpdateDateColumn()
  updateAt: Date;

  //Relacion de uno a muchos con la tabla rol, no se pone columna id porque por debajo hace la relación.
  @OneToMany(() => User, (user) => user.company)
  user: User;
  static user: any;

  @OneToMany(() => Product, (product) => product.company)
  product: Product;
}
