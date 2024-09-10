import 'reflect-metadata'
import connectDB from '@infra/mongodb/MongoDbConnection'
import { connectRedis } from '@infra/redis/RedisClient'
import app from '@presentation/App'

connectDB()
  .then(async () => {
    await connectRedis()
    await connectDB()
  })
  .then(() => {

  })
  .catch((error) => {
    console.error('Failed to start the server:', error)
    process.exit(1)
  })

app.listen(3000)
