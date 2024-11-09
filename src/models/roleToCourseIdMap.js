import { Schema, model, models } from "mongoose";

const roleToCourceIdSchema = new Schema(
  {
    roleToEducationId: {
      type: String,
      required: true,
    },
    courseId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const RoleToCourceIdMap =
  models.roleToCourceIdMap || model("roleToCourceIdMap", roleToCourceIdSchema);

export default RoleToCourceIdMap;
