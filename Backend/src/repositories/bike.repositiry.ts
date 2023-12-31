import { Bike } from "../models/Bike.model";
import { IBike } from "../types/bike.type";
import { IQuery } from "../types/pagination.type";

class BikeRepository {
  public async getAll(query: IQuery): Promise<[IBike[], number]> {
    const queryStr = JSON.stringify(query);
    const queryObj = JSON.parse(
      queryStr.replace(/\b(gte|lte|gt|lt)\b/, (match) => `$${match}`),
    );

    const { page, limit, sortedBy, ...searchObject } = queryObj;

    const skip = +limit * (+page - 1);

    return await Promise.all([
      Bike.find(searchObject).limit(+limit).skip(skip).sort(sortedBy),
      Bike.find().count(searchObject),
    ]);
  }

  public async post(dto: IBike): Promise<IBike> {
    const bike = await Bike.create(dto);
    return bike;
  }

  public async put(id: string, dto: IBike): Promise<IBike> {
    const bike = await Bike.findOne({ ID_slug: id });
    return await Bike.findByIdAndUpdate(
      bike.id,
      { status: dto.status },
      {
        returnDocument: "after",
      },
    );
  }

  public async delete(ID_slug: string): Promise<number> {
    const { deletedCount } = await Bike.deleteOne({ ID_slug });
    return deletedCount;
  }
}

export const bikeRepository = new BikeRepository();
