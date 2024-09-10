import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'

import { type IMessage } from '@domain/message/entities/Message'

import { type IMessageService } from '@domain/message/interfaces/IMessageService'
import { redisClient } from '@infra/redis/RedisClient'
import { type ICreateMessage } from '../interfaces/ICreateMessage'
import { type IMessageRepository } from '../interfaces/IMessageRepository'

@injectable()
export default class MessageService implements IMessageService {
  constructor(
    @inject(tokens.MessageRepository)
    private readonly messageRepository: IMessageRepository
  ) {}

  async create(message: ICreateMessage): Promise<IMessage> {
    const savedMessage = await this.messageRepository.create(message)

    const redisKey = `chat:${message.roomId}:messages`
    await redisClient.LPUSH(redisKey, JSON.stringify(savedMessage))
    await redisClient.LTRIM(redisKey, 0, 99)

    await redisClient.publish(
      `chat:${message.roomId}`,
      JSON.stringify(savedMessage)
    )
    return savedMessage
  }
}
