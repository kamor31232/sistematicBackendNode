//Tabla cliente

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Invoice } from "./invoice.model";
import { DocumentType } from "./document-type.model";

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 70 })
  surnames: string;

  @Column({ length: 20 })
  cellphone: string;

  @Column({ length: 80 })
  email: string;

  @Column({ length: 150 })
  address: string;

  @Column({ length: 15 })
  documentNumber: string;

  @Column({ type: "enum", enum: ["active", "inactive"], default: "active" })
  status: string;

  //Fecha de creación
  @CreateDateColumn()
  createdAt: Date;

  //Fecha de actualización
  @UpdateDateColumn()
  updateAt: Date;

  //Relacion de uno a muchos con la tabla rol, no se pone columna id porque por debajo hace la relación.
  @OneToMany(() => Invoice, (invoice) => invoice.client)
  invoice: Invoice;

  //Relacion de muchos a uno con la tabla rol, no se pone columna id porque por debajo hace la relación.
  @ManyToOne(() => DocumentType, (documentType) => documentType.client)
  documentType: DocumentType;
}
