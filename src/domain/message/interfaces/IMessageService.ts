import { type IMessage } from '@domain/message/entities/Message'
import { type ICreateMessage } from '@domain/message/interfaces/ICreateMessage'

export interface IMessageService {
  create: (message: ICreateMessage) => Promise<IMessage>
}
