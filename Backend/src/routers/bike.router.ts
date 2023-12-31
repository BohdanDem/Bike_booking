import { Router } from "express";

import { bikeController } from "../controllers/bike.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { BikeValidator } from "../validators/bike.validator";
import { QueryValidator } from "../validators/query.validator";

const router = Router();

router.get(
  "/",
  commonMiddleware.isQueryValid(QueryValidator.query),
  bikeController.getAll,
);

router.post(
  "/",
  commonMiddleware.isBodyValid(BikeValidator.create),
  bikeController.post,
);

router.put("/:ID_slug", bikeController.put);

router.delete("/:ID_slug", bikeController.delete);

export const bikeRouter = router;
