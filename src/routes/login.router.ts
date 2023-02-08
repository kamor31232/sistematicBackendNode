import { Router } from "express";
import { loginController } from "../controllers";

export default () => {
  const router = Router();

  router.post("/authentication", loginController.authentication);

  return router;
};
