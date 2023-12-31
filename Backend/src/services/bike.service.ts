import slugify from "slugify";

import { EStatus } from "../enums/bike.status.enum";
import { ApiError } from "../errors/api.error";
import { Bike } from "../models/Bike.model";
import { bikeRepository } from "../repositories/bike.repositiry";
import { IBike } from "../types/bike.type";
import { IPaginationResponse, IQuery } from "../types/pagination.type";

class BikeService {
  public async getAll(query: IQuery): Promise<IPaginationResponse<IBike>> {
    try {
      const [bikes, itemsCount, averageBikeCost, availableBikes, bookedBikes] =
        await bikeRepository.getAll(query);

      return {
        page: +query.page,
        limit: +query.limit,
        itemsCount,
        itemsFound: bikes.length,
        availableBikes: availableBikes,
        bookedBikes: bookedBikes,
        averageBikeCost: averageBikeCost,
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

      bike.ID_slug = this.getSlug(dto.ID_slug);
      bike.status = EStatus.Available;

      return await bikeRepository.post(bike);
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async put(ID_slug: string, dto: IBike): Promise<IBike> {
    try {
      return await bikeRepository.put(ID_slug, dto);
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

  private getSlug(ID_slug: string): string {
    return (
      slugify(ID_slug, { lower: true }) +
      "-" +
      ((Math.random() * Math.pow(36, 6)) | 0).toString(36)
    );
  }
}

export const bikeService = new BikeService();
