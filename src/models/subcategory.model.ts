import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Category } from "./category.model";
import { Product } from "./product.model";

//Tabla sub-Categoria
@Entity()
export class Subcategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  name: string;

  //Fecha de creación
  @CreateDateColumn()
  createdAt: Date;

  //Fecha de actualización
  @UpdateDateColumn()
  updateAt: Date;

  @Column({ type: "enum", enum: ["active", "inactive"], default: "active" })
  status: string;

  //Relacion de uno a muchos con la tabla rol, no se pone columna id porque por debajo hace la relación.
  @OneToMany(() => Product, (product) => product.subcategory)
  product: Product;

  @ManyToOne(() => Category, (category) => category.subcategory)
  category: Category;
}
