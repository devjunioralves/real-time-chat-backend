import Message, { type IMessage } from '@domain/message/entities/Message'
import { type IMessageRepository } from '@domain/message/interfaces/IMessageRepository'
import { injectable } from 'tsyringe'

@injectable()
export default class MessageRepository implements IMessageRepository {
  async create(item: IMessage): Promise<IMessage> {
    const message = new Message(item)
    return message.save()
  }
}
