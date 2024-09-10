import { type IRequest } from '@presentation/http/interfaces/IRequest'
import { type BaseError } from '@shared/exceptions/BaseError'
import { InternalException } from '@shared/exceptions/InternalException'
import { type HttpResponse } from '@shared/http/interfaces/IHttpResponse'

export default abstract class BaseController {
  abstract execute(request: IRequest): Promise<HttpResponse>

  send(data: unknown) {
    return {
      data,
    }
  }

  sendStatus(status: number) {
    return {
      status,
    }
  }

  error(err: BaseError) {
    if (!err.customError) {
      throw new InternalException(`
				Unexpected Error.
				Error: ${JSON.stringify(err)}
			`)
    }

    return {
      error: {
        code: err.statusCode,
        message: {
          type: err.name,
          value: err.message,
        },
      },
    }
  }
}
