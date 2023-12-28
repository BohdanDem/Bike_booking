import { NextFunction, Request, Response } from "express";

import { bikeService } from "../services/bike.service";

class BikeController {
  // public async getAll(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction,
  // ): Promise<Response<ICar[]>> {
  //   try {
  //     const cars = await carService.getAll(req.query as unknown as IQuery);
  //
  //     return res.json(cars);
  //   } catch (e) {
  //     next(e);
  //   }
  // }

  public async post(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const bike = await bikeService.post(req.body);

      res.status(201).json(bike);
    } catch (e) {
      next(e);
    }
  }

  // public async delete(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction,
  // ): Promise<void> {
  //   try {
  //     const { id } = req.params;
  //     await carService.delete(id);
  //
  //     res.sendStatus(204);
  //   } catch (e) {
  //     next(e);
  //   }
  // }
}

export const bikeController = new BikeController();
