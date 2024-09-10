import mongoose, { type Document, Schema } from 'mongoose'

export interface IMessage extends Document {
  id?: string
  text: string
  sender: string
  roomId: string
  timestamp: Date
}

const messageSchema: Schema = new Schema({
  text: { type: String, required: true },
  sender: { type: String, required: true },
  roomId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
})

const Message = mongoose.model<IMessage>('messages', messageSchema)

export default Message
