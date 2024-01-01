import { Bike } from "../models/Bike.model";
import { IAvgBikePrice, IBike } from "../types/bike.type";
import { IQuery } from "../types/pagination.type";

class BikeRepository {
  public async getAll(
    query: IQuery,
  ): Promise<[IBike[], number, number, number, number]> {
    const queryStr = JSON.stringify(query);
    const queryObj = JSON.parse(
      queryStr.replace(/\b(gte|lte|gt|lt)\b/, (match) => `$${match}`),
    );

    const { page, limit, sortedBy, ...searchObject } = queryObj;

    const skip = +limit * (+page - 1);

    const bikes: IBike[] = await Bike.find(searchObject)
      .limit(+limit)
      .skip(skip)
      .sort(sortedBy);

    const itemsCount: number = await Bike.find().count(searchObject);

    const averageBikeCost: IAvgBikePrice[] = await Bike.aggregate([
      {
        $group: {
          _id: "average bike cost",
          avgPrice: { $avg: "$price" },
        },
      },
    ]);

    const availableBikes: IBike[] = await Bike.find({ status: "Available" });

    const bookedBikes: IBike[] = await Bike.find({ status: "Busy" });

    return [
      bikes,
      itemsCount,
      averageBikeCost[0].avgPrice,
      availableBikes.length,
      bookedBikes.length,
    ];
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
