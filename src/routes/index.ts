//Exportamos lo que hay dentro de un archivo

import { Router } from "express";
import loginRouter from "./login.router";

//función
export default () => {
  //Constante
  const router = Router();

  //Creamos rutas en archivos separados y aqui nombramos los nombres de las rutas.

  //Ruta Login para iniciar sesión
  router.use("/login", loginRouter());

  return router;
};

//Express es el servidor de Node , apache-php express-Node.
