import { Router } from 'express'

import BaseController from '@shared/http/controller/BaseController'
import BaseRouter from '@shared/http/controller/BaseRouter'

import { tokens } from 'di/tokens'
import { inject, injectable } from 'tsyringe'

import { type IRouter } from './IRouter'

@injectable()
export class MessageRouter extends BaseRouter implements IRouter {
  constructor(
    @inject(tokens.CreateMessageController)
    private readonly createMessageController: BaseController
  ) {
    super(Router())
  }

  setup(): Router {
    this.post('/v1/message', this.createMessageController)

    return this.getRouter()
  }
}
