import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Rol } from "./rol.model";
import { DocumentType } from "./document-type.model";
import { Company } from "./company.model";
import { Invoice } from "./invoice.model";
import { Product } from "./product.model";
import { UserToken } from "./user-token.model";

//Tabla Usuario, se crea estado de usuario y fecha de registro de usuario.
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  names: string;

  @Column({ length: 70 })
  surnames: string;

  @Column({ length: 15 })
  documentNumber: string;

  @Column({ length: 150 })
  address: string;

  @Column({ length: 80 })
  email: string;

  @Column()
  password: string;

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

  //Relacion de muchos a uno con la tabla rol, no se pone columna id porque por debajo hace la relación.
  @ManyToOne(() => Rol, (rol) => rol.user)
  rol: Rol;

  @ManyToOne(() => DocumentType, (documentType) => documentType.user)
  documentType: DocumentType;

  @ManyToOne(() => Company, (company) => company.user)
  company: Company;

  @OneToMany(() => Invoice, (invoice) => invoice.user)
  invoice: Invoice;

  @OneToMany(() => Product, (product) => product.user)
  product: Product;

  @OneToMany(() => UserToken, (token) => token.user)
  token: UserToken;
}
