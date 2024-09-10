import { tokens } from '@di/tokens'
import { type Router } from 'express'
import { inject, injectable } from 'tsyringe'
import { type IRouter } from './routes/IRouter'

@injectable()
export class Routes {
  constructor(
    @inject(tokens.MessageRouter)
    private readonly messageRouter: IRouter
  ) {}

  public setupRouter(router: Router) {
    router.use('/api', this.messageRouter.setup())
  }
}
