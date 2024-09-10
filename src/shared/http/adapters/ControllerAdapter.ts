import { type IRequest } from '@presentation/http/interfaces/IRequest'
import { BaseError } from '@shared/exceptions/BaseError'
import type BaseController from '@shared/http/controller/BaseController'
import { type Request, type Response } from 'express'

export function controllerAdapter(controller: BaseController) {
  return async (req: Request, res: Response) => {
    try {
      const request: IRequest = {
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers,
      }

      const response = await controller.execute(request)
      if (response.error != null) {
        return res.status(response.error.code).send(response.error)
      }

      if (
        response.statusCode != null &&
        response.statusCode !== 0 &&
        !isNaN(response.statusCode)
      ) {
        return res.status(response.statusCode).send(response.data)
      }

      return res.status(200).send(response.data)
    } catch (error) {
      if (!(error instanceof BaseError)) {
        return res.sendStatus(500)
      }

      return res.status(error.statusCode).send({
        error: {
          code: error.statusCode,
          message: {
            type: error.name,
            value: error.message,
          },
        },
      })
    }
  }
}
