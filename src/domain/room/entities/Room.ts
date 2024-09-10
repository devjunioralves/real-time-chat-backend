import mongoose, { type Document, Schema } from 'mongoose'

export interface IRoom extends Document {
  id?: string
  name: string
  timestamp: Date
}

const roomSchema: Schema = new Schema({
  name: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
})

const Room = mongoose.model<IRoom>('rooms', roomSchema)

export default Room
