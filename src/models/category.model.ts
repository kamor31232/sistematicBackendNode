import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Subcategory } from "./subcategory.model";

//Tabla categoria
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  name: string;

  @Column({ type: "enum", enum: ["active", "inactive"], default: "active" })
  status: string;

  //Fecha de creación
  @CreateDateColumn()
  createdAt: Date;

  //Fecha de actualización
  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany(() => Subcategory, (subcategory) => subcategory.category)
  subcategory: Subcategory;
}
