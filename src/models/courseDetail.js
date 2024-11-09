import { Schema, model, models } from "mongoose";

const courseSchema = new Schema(
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
    exams: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CourseDetail = models.courseDetail || model("courseDetail", courseSchema);

export default CourseDetail;
