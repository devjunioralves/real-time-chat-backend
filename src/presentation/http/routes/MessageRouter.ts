import { Router } from 'express'

import BaseController from '@shared/http/controller/BaseController'
import BaseRouter from '@shared/http/controller/BaseRouter'

import { tokens } from 'di/tokens'
import { inject, injectable } from 'tsyringe'

import { type IRouter } from './IRouter'

@injectable()
export class MessageRouter extends BaseRouter implements IRouter {
  constructor(
    @inject(tokens.FindMessageRecentController)
    private readonly findMessageRecentController: BaseController
  ) {
    super(Router())
  }

  setup(): Router {
    this.get('/v1/message/recent', this.findMessageRecentController)

    return this.getRouter()
  }
}
