import { Document } from "mongoose";

import { EStatus } from "../enums/bike.status.enum";

export interface IBike extends Document {
  ID_slug: string;
  name: string;
  type: string;
  color: string;
  wheel_size: number;
  price: number;
  description: string;
  status: EStatus;
}

export interface IAvgBikePrice {
  _id: string;
  avgPrice: number;
}
