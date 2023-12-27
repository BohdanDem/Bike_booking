import { model, Schema } from "mongoose";
import {IBike} from "../types/bike.type";

const bikeSchema = new Schema({
  price: {
    type: Number,
  },
});

export const Bike = model<IBike>("bike", bikeSchema);
