import { Schema, model, models } from "mongoose";

const roleToEducationSchema = new Schema(
  {
    role: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    courseIds: {
      type: [String],
      required: true,
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
    otherOptions: {
      type: [String],
    },
    reallifeexample: {
      type: [String],
    },
  },
  { timestamps: true }
);

const RoleToEducationMap =
  models.roleToEducationMap ||
  model("roleToEducationMap", roleToEducationSchema);

export default RoleToEducationMap;
