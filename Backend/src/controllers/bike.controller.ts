import { NextFunction, Request, Response } from "express";

import { bikeService } from "../services/bike.service";
import { IBike } from "../types/bike.type";
import { IQuery } from "../types/pagination.type";

class BikeController {
  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<IBike[]>> {
    try {
      const bikes = await bikeService.getAll(req.query as unknown as IQuery);

      return res.json(bikes);
    } catch (e) {
      next(e);
    }
  }

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

  public async put(req: Request, res: Response, next: NextFunction) {
    try {
      const { ID_slug } = req.params;
      const bike = await bikeService.put(ID_slug, req.body);

      res.status(201).json(bike);
    } catch (e) {
      next(e);
    }
  }

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { ID_slug } = req.params;
      await bikeService.delete(ID_slug);

      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  }
}

export const bikeController = new BikeController();
