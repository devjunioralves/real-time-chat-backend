import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://mongodb:27017/realtimechat')
    console.log('MongoDB Connected')
  } catch (error) {
    console.error('Error: ' + (error as Error).message)
    process.exit(1)
  }
}

export default connectDB
