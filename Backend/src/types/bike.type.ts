import { Document } from "mongoose";

export interface IBike extends Document {
  ID_slug: string;
  price: number;
  description: string;
}
