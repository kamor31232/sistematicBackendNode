import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./product.model";

//Tabla proveedor
@Entity()
export class Provider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  businessName: string;

  @Column({ length: 25 })
  adminName: string;

  @Column({ length: 10 })
  cellphone: string;

  @Column({ length: 45 })
  email: string;

  @Column({ length: 150 })
  address: string;

  @Column({ type: "enum", enum: ["active", "inactive"], default: "active" })
  status: string;

  //Fecha de creación
  @CreateDateColumn()
  createdAt: Date;

  //Fecha de actualización
  @UpdateDateColumn()
  updateAt: Date;

  //Relacion de uno a muchos con la tabla rol, no se pone columna id porque por debajo hace la relación.
  @OneToMany(() => Product, (product) => product.provider)
  product: Product;
}
