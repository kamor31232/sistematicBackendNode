import { Category } from "./category.model";
import { Client } from "./client.model";
import { Color } from "./color.model";
import { Company } from "./company.model";
import { DetailInvoice } from "./detail-invoice.model";
import { DocumentType } from "./document-type.model";
import { Invoice } from "./invoice.model";
import { Product } from "./product.model";
import { Provider } from "./provider.model";
import { Rol } from "./rol.model";
import { Subcategory } from "./subcategory.model";
import { UserToken } from "./user-token.model";
import { User } from "./user.model";

export default [
  User,
  Rol,
  DocumentType,
  Company,
  Color,
  Provider,
  Subcategory,
  Category,
  Product,
  DetailInvoice,
  Invoice,
  Client,
  UserToken,
];
