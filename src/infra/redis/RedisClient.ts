import { createClient } from 'redis'

const redisClient = createClient({
  url: process.env.REDIS_URL ?? 'redis://redis:6379',
})

redisClient.on('error', (err) => {
  console.error('Redis error:', err)
})

const connectRedis = async () => {
  try {
    await redisClient.connect()
    console.log('Connected to Redis')
  } catch (error) {
    console.error('Could not connect to Redis', error)
    process.exit(1)
  }
}

export { connectRedis, redisClient }
