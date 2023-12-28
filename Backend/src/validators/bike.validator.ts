import joi from "joi";

export class BikeValidator {
  static _name = joi.string().min(2).max(30).trim();
  static _type = joi.string().min(5).max(30).trim();
  static _color = joi.string().min(5).max(30).trim();
  static _wheel_size = joi.number();
  static _price = joi.number();
  static _description = joi.string().min(5).max(300).trim();

  static create = joi.object({
    name: this._name.required(),
    type: this._type.required(),
    color: this._color.required(),
    wheel_size: this._wheel_size.required(),
    price: this._price.required(),
    description: this._description.required(),
  });
}
