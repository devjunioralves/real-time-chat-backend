import { type IErrorArguments } from '@shared/exceptions/interfaces/IErrorArguments'

export class BaseError extends Error {
  readonly statusCode: number
  readonly customError: boolean

  constructor({ message, name, statusCode }: IErrorArguments) {
    super(message)
    this.name = name ?? 'BaseError'
    this.customError = true
    this.statusCode = statusCode ?? 500
  }
}
