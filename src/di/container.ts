import { tokens } from '@di/tokens'
import { container } from 'tsyringe'

import { Routes } from '@presentation/http/Routes'

import MessageAppService from '@application/message/MessageAppService'
import MessageRepository from '@domain/message/infra/MessageRepository'
import MessageService from '@domain/message/services/MessageService'
import CreateMessageController from '@presentation/http/controllers/message/CreateMessageController'
import { MessageRouter } from '@presentation/http/routes/MessageRouter'
import { SocketAdapter } from '@shared/http/adapters/SocketAdapter'

const childContainer = container.createChildContainer()

childContainer.registerSingleton(tokens.Routes, Routes)
childContainer.registerSingleton(tokens.MessageAppService, MessageAppService)
childContainer.registerSingleton(tokens.MessageRepository, MessageRepository)
childContainer.registerSingleton(tokens.MessageService, MessageService)
childContainer.registerSingleton(
  tokens.CreateMessageController,
  CreateMessageController
)
childContainer.registerSingleton(tokens.SocketAdapter, SocketAdapter)
childContainer.registerSingleton(tokens.MessageRouter, MessageRouter)

export { childContainer as container }
