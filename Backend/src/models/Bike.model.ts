import { model, Schema } from "mongoose";

const bikeSchema = new Schema({});

export const Bike = model("bike", bikeSchema);
