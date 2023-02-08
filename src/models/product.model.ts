import { text } from "stream/consumers";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Color } from "./color.model";
import { Company } from "./company.model";
import { DetailInvoice } from "./detail-invoice.model";
import { Provider } from "./provider.model";
import { Subcategory } from "./subcategory.model";
import { User } from "./user.model";
//Tabla producto
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 20 })
  reference: string;

  //Dato tipo texto
  @Column({ type: "text" })
  description: string;

  @Column()
  stock: number;

  @Column({ type: "float" })
  price: number;

  @Column()
  measure: number;

  @Column({ type: "enum", enum: ["active", "inactive"], default: "active" })
  status: string;

  //Fecha de creación
  @CreateDateColumn()
  createdAt: Date;

  //Fecha de actualización
  @UpdateDateColumn()
  updateAt: Date;

  //Relacion de muchos a uno con la tabla rol, no se pone columna id porque por debajo hace la relación.
  @ManyToOne(() => Color, (color) => color.product)
  color: Color;

  @ManyToOne(() => Provider, (provider) => provider.product)
  provider: Provider;

  @ManyToOne(() => Subcategory, (subcategory) => subcategory.product)
  subcategory: Subcategory;

  //Relación con detalle de factura
  @OneToMany(() => DetailInvoice, (detailinvoice) => detailinvoice.product)
  detailinvoice: DetailInvoice;

  //Relacion de muchos a uno con la tabla rol, no se pone columna id porque por debajo hace la relación.
  @ManyToOne(() => Company, (company) => company.product)
  company: Company;

  @ManyToOne(() => User, (user) => user.product)
  user: User;
}
