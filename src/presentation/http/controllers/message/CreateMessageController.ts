import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'

import MessageAppService from '@application/message/MessageAppService'
import BaseController from '@shared/http/controller/BaseController'

import { type ICreateMessage } from '@domain/message/interfaces/ICreateMessage'
import { type IRequest } from '@presentation/http/interfaces/IRequest'
import { type BaseError } from '@shared/exceptions/BaseError'

@injectable()
export default class CreateMessageController extends BaseController {
  constructor(
    @inject(tokens.MessageAppService)
    private readonly messageAppService: MessageAppService
  ) {
    super()
  }

  public async execute(request: IRequest) {
    try {
      const { text, sender, roomId } = request.body as {
        text: string
        sender: string
        roomId: string
      }

      const result = await this.messageAppService.create({
        text,
        sender,
        roomId,
      } as unknown as ICreateMessage)

      return this.send(result)
    } catch (err) {
      return this.error(err as BaseError)
    }
  }
}
