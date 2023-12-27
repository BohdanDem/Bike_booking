import { Document } from "mongoose";

export interface IBike extends Document {
  name: string;
  price: number;
}
