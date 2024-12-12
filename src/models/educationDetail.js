import { Schema, model, models } from "mongoose";

const educationSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    otherOptions: {
      type: [String],
    },
    colleges: {
        type: [String],
    },
    resources: [
      {
        name: {
          type: String,
        },
        description: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const EducationDetail =
  models.educationDetail || model("educationDetail", educationSchema);

export default EducationDetail;
