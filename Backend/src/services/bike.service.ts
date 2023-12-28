import slugify from "slugify";

import { ApiError } from "../errors/api.error";
import { Bike } from "../models/Bike.model";
import { bikeRepository } from "../repositories/bike.repositiry";
import { IBike } from "../types/bike.type";

class BikeService {
  // public async getAll() {
  //   try {
  //     const [cars, itemsCount] = await carRepository.getAll();
  //
  //     return {
  //       page: +query.page,
  //       limit: +query.limit,
  //       itemsCount,
  //       itemsFound: cars.length,
  //       data: cars,
  //     };
  //   } catch (e) {
  //     throw new ApiError(e.message, e.status);
  //   }
  // }

  public async post(dto: IBike): Promise<IBike> {
    try {
      const bike = new Bike();
      Object.assign(bike, dto);

      bike.ID_slug = this.getSlug(dto.name);

      return await bikeRepository.post(bike);
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  // public async delete(id: string): Promise<number> {
  //   const deletedCount = await carRepository.delete(id);
  //
  //   if (!deletedCount) {
  //     throw new ApiError("Car not found", 404);
  //   }
  //   return deletedCount;
  // }

  private getSlug(name: string): string {
    return (
      slugify(name, { lower: true }) +
      "-" +
      ((Math.random() * Math.pow(36, 6)) | 0).toString(36)
    );
  }
}

export const bikeService = new BikeService();
