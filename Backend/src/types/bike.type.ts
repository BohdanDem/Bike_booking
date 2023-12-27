import { Document } from "mongoose";

export interface IBike extends Document {
  price: number;
}
