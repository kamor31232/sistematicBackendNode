// Archivo principal de la aplicación
import "reflect-metadata";
import { initiallApp } from "./boot/app";
import { initiallDb } from "./boot/typeorm";

//Crear funcion que ejecuta el proyecto
async function app() {
  const app = new initiallApp();
  const db = new initiallDb();
  await app.listen();
  await db.createConection();
}

//Ejecutar función
app();
