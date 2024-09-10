import { tokens } from '@di/tokens'
import { container } from 'tsyringe'

import { Routes } from '@presentation/http/Routes'

import MessageAppService from '@application/message/MessageAppService'
import RoomAppService from '@application/room/RoomAppService'
import MessageRepository from '@domain/message/infra/MessageRepository'
import MessageService from '@domain/message/services/MessageService'
import RoomRepository from '@domain/room/infra/RoomRepository'
import RoomService from '@domain/room/services/RoomService'
import FindMessageRecentController from '@presentation/http/controllers/message/FindMessageRecentController'
import CreateRoomController from '@presentation/http/controllers/room/CreateRoomController'
import FindAllRoomController from '@presentation/http/controllers/room/FindAllRoomController'
import { MessageRouter } from '@presentation/http/routes/MessageRouter'
import { RoomRouter } from '@presentation/http/routes/RoomRouter'
import { SocketAdapter } from '@shared/http/adapters/SocketAdapter'

const childContainer = container.createChildContainer()

childContainer.registerSingleton(tokens.Routes, Routes)
childContainer.registerSingleton(tokens.MessageAppService, MessageAppService)
childContainer.registerSingleton(tokens.MessageRepository, MessageRepository)
childContainer.registerSingleton(tokens.MessageService, MessageService)
childContainer.registerSingleton(
  tokens.FindMessageRecentController,
  FindMessageRecentController
)
childContainer.registerSingleton(tokens.SocketAdapter, SocketAdapter)
childContainer.registerSingleton(tokens.MessageRouter, MessageRouter)

childContainer.registerSingleton(tokens.Routes, Routes)
childContainer.registerSingleton(tokens.RoomAppService, RoomAppService)
childContainer.registerSingleton(tokens.RoomRepository, RoomRepository)
childContainer.registerSingleton(tokens.RoomService, RoomService)
childContainer.registerSingleton(
  tokens.CreateRoomController,
  CreateRoomController
)
childContainer.registerSingleton(
  tokens.FindAllRoomController,
  FindAllRoomController
)
childContainer.registerSingleton(tokens.RoomRouter, RoomRouter)

export { childContainer as container }
