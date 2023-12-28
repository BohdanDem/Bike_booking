import { Router } from "express";

import { bikeController } from "../controllers/bike.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { BikeValidator } from "../validators/bike.validator";

const router = Router();

//router.get("/", carController.getAll);

router.post(
  "/",
  commonMiddleware.isBodyValid(BikeValidator.create),
  bikeController.post,
);

//router.delete("/:id", carController.delete);

export const bikeRouter = router;
