import { model, Schema } from "mongoose";

import { IBike } from "../types/bike.type";

const bikeSchema = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Bike = model<IBike>("bike", bikeSchema);
