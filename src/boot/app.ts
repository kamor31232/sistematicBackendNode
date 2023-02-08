// Configurar aplicación , en que puerto se va alojar
// Librerias
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import express, { Application } from "express";
import helmet from "helmet";
import routes from "../routes";

//Crear constante y declarar función (Variables)
export class initiallApp {
  private app: Application;
  //Metodo constructor
  constructor() {
    this.app = express();
  }

  //Método retorna
  async listen() {
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan("dev"));

    //Usar rutas
    this.app.use(routes());

    await this.app.listen(3000);
    console.log("Server on port 3000");
  }
}
