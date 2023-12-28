import slugify from "slugify";

import { ApiError } from "../errors/api.error";
import { Bike } from "../models/Bike.model";
import { bikeRepository } from "../repositories/bike.repositiry";
import { IBike } from "../types/bike.type";
import { IPaginationResponse, IQuery } from "../types/pagination.type";

class BikeService {
  public async getAll(query: IQuery): Promise<IPaginationResponse<IBike>> {
    try {
      const [bikes, itemsCount] = await bikeRepository.getAll(query);

      return {
        page: +query.page,
        limit: +query.limit,
        itemsCount,
        itemsFound: bikes.length,
        data: bikes,
      };
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

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

  public async delete(ID_slug: string): Promise<number> {
    const deletedCount = await bikeRepository.delete(ID_slug);

    if (!deletedCount) {
      throw new ApiError("Bike not found", 404);
    }
    return deletedCount;
  }

  private getSlug(name: string): string {
    return (
      slugify(name, { lower: true }) +
      "-" +
      ((Math.random() * Math.pow(36, 6)) | 0).toString(36)
    );
  }
}

export const bikeService = new BikeService();
