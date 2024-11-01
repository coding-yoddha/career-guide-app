import { Schema, model, models } from 'mongoose'

const careerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
}, { timestamps: true })

const CareerOverview = models.careerDetail || model('careerDetail', careerSchema)

export default CareerOverview;