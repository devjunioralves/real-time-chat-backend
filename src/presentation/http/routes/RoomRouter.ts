import { Router } from 'express'

import BaseController from '@shared/http/controller/BaseController'
import BaseRouter from '@shared/http/controller/BaseRouter'

import { tokens } from 'di/tokens'
import { inject, injectable } from 'tsyringe'

import { type IRouter } from './IRouter'

@injectable()
export class RoomRouter extends BaseRouter implements IRouter {
  constructor(
    @inject(tokens.CreateRoomController)
    private readonly createRoomController: BaseController,

    @inject(tokens.FindAllRoomController)
    private readonly findAllRoomController: BaseController
  ) {
    super(Router())
  }

  setup(): Router {
    this.post('/v1/room', this.createRoomController)
    this.get('/v1/room', this.findAllRoomController)

    return this.getRouter()
  }
}
