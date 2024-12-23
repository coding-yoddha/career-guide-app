import { Schema, model, models } from "mongoose";

const academicsMapSchema = new Schema(
  {
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
    career: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const AcademicsMap =
  models.academicsMap || model("academicsMap", academicsMapSchema);
export default AcademicsMap;
