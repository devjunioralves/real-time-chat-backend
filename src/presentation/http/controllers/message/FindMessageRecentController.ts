import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'

import MessageAppService from '@application/message/MessageAppService'
import BaseController from '@shared/http/controller/BaseController'

import { type IRequest } from '@presentation/http/interfaces/IRequest'
import { type BaseError } from '@shared/exceptions/BaseError'

@injectable()
export default class FindMessageRecentController extends BaseController {
  constructor(
    @inject(tokens.MessageAppService)
    private readonly messageAppService: MessageAppService
  ) {
    super()
  }

  public async execute(request: IRequest) {
    try {
      const { roomId } = request.query as {
        roomId: string
      }

      const result = await this.messageAppService.findRecent(roomId)

      return this.send(result)
    } catch (err) {
      return this.error(err as BaseError)
    }
  }
}
