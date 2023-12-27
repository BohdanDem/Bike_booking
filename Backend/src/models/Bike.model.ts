import { model, Schema } from "mongoose";

import { IBike } from "../types/bike.type";

const bikeSchema = new Schema({});

export const Bike = model<IBike>("bike", bikeSchema);
