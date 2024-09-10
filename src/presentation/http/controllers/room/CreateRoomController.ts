import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'

import BaseController from '@shared/http/controller/BaseController'

import RoomAppService from '@application/room/RoomAppService'
import { type IRequest } from '@presentation/http/interfaces/IRequest'
import { type BaseError } from '@shared/exceptions/BaseError'

@injectable()
export default class CreateRoomController extends BaseController {
  constructor(
    @inject(tokens.RoomAppService)
    private readonly roomAppService: RoomAppService
  ) {
    super()
  }

  public async execute(request: IRequest) {
    try {
      const { name } = request.body as {
        name: string
      }

      const result = await this.roomAppService.create(name)

      return this.send(result)
    } catch (err) {
      return this.error(err as BaseError)
    }
  }
}
