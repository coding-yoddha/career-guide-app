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
  },
  { timestamps: true }
);

const RoleToEducationMap =
  models.roleToEducationMap ||
  model("roleToEducationMap", roleToEducationSchema);

export default RoleToEducationMap;
