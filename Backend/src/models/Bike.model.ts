import { model, Schema } from "mongoose";

import { EStatus } from "../enums/bike.status.enum";
import { IBike } from "../types/bike.type";

const bikeSchema = new Schema(
  {
    ID_slug: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    wheel_size: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: EStatus,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Bike = model<IBike>("bike", bikeSchema);
