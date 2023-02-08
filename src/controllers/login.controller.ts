import { Request, Response } from "express";

export class LoginController {
  //Creamos métodos

  //Funcion Login
  authentication(request: Request, response: Response) {
    response.json({
      test: "Hola",
    });
  }
}
