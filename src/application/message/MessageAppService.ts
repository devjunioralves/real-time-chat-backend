import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'

import { type IMessage } from '@domain/message/entities/Message'
import { type ICreateMessage } from '@domain/message/interfaces/ICreateMessage'
import { type IMessageService } from '@domain/message/interfaces/IMessageService'

@injectable()
export default class MessageAppService {
  constructor(
    @inject(tokens.MessageService)
    private readonly messageService: IMessageService
  ) {}

  async create(data: ICreateMessage): Promise<IMessage> {
    return await this.messageService.create(data)
  }
}
