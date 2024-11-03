import { Schema, model, models } from "mongoose";

const careerOptionSchema = new Schema(
  {
    career: {
      type: String,
      required: true,
    },
    option: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CareerOption =
  models.careerOption || model("careerOption", careerOptionSchema);
export default CareerOption;
