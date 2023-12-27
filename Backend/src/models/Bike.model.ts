import { model, Schema } from "mongoose";
import {IBike} from "../types/bike.type";

const bikeSchema = new Schema(
  {
    ID_slug: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Bike = model<IBike>("bike", bikeSchema);
