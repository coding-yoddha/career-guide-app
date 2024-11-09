import { Schema, model, models } from "mongoose";

const educationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    otherOptions: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const EducationDetail =
  models.educationDetail || model("educationDetail", educationSchema);

export default EducationDetail;
