import Container from "typedi";
import { createConnection, useContainer } from "typeorm";
import models from "../models";
export class initiallDb {
  // Creamos método de conección a base de datos
  createConection() {
    useContainer(Container);
    return createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "sistematicnodejs",
      entities: models,
      logging: true,
      synchronize: false,
    });
  }
}
