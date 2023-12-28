import { Document } from "mongoose";

export interface IBike extends Document {
  ID_slug: string;
  name: string;
  type: string;
  color: string;
  wheel_size: number;
  price: number;
  description: string;
}
