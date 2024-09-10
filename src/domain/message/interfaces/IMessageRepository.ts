import { type IMessage } from '../entities/Message'
import { type ICreateMessage } from './ICreateMessage'

export interface IMessageRepository {
  create: (message: ICreateMessage) => Promise<IMessage>
}
