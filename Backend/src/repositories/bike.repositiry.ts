import { Bike } from "../models/Bike.model";
import { IBike } from "../types/bike.type";

class BikeRepository {
  // public async getAll(): Promise<[ICar[], number]> {
  //   const queryStr = JSON.stringify(query);
  //   const queryObj = JSON.parse(
  //     queryStr.replace(/\b(gte|lte|gt|lt)\b/, (match) => `$${match}`),
  //   );
  //
  //   const { page, limit, sortedBy, ...searchObject } = queryObj;
  //
  //   const skip = +limit * (+page - 1);
  //
  //   return await Promise.all([
  //     Car.find(searchObject).limit(+limit).skip(skip).sort(sortedBy),
  //     Car.find().count(searchObject),
  //   ]);
  // }

  public async post(dto: IBike): Promise<IBike> {
    const bike = await Bike.create(dto);
    return bike;
  }

  // public async findById(id: string): Promise<ICar> {
  //   return await Car.findById(id);
  // }

  // public async delete(id: string): Promise<number> {
  //   const { deletedCount } = await Car.deleteOne({ _id: id });
  //   return deletedCount;
  // }

  // public async getOneByParams(params: FilterQuery<ICar>): Promise<ICar> {
  //   return await Car.findOne(params);
  // }
}

export const bikeRepository = new BikeRepository();
