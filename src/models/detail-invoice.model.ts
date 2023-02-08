import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./product.model";

//Tabla detalle de factura
@Entity()
export class DetailInvoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "float" })
  price: number;

  @Column()
  stock: number;

  @Column({ type: "float" })
  subtotal: number;

  @Column({ type: "enum", enum: ["active", "inactive"], default: "active" })
  status: string;

  //Fecha de creación
  @CreateDateColumn()
  createdAt: Date;

  //Fecha de actualización
  @UpdateDateColumn()
  updateAt: Date;

  //Relación con producto
  @ManyToOne(() => Product, (product) => product.detailinvoice)
  product: Product;
}
