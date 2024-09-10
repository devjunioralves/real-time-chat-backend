import { type IMessage } from '@domain/message/entities/Message'

export type ICreateMessage = Omit<IMessage, 'id'>
