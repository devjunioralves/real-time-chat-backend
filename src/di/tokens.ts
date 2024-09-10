export const tokens = {
  // Global
  Routes: Symbol('Routes'),
  MongoDbClient: Symbol('MongoDbClient'),

  // Message
  MessageRouter: Symbol('MessageRouter'),
  FindMessageRecentController: Symbol('FindMessageRecentController'),
  MessageAppService: Symbol('MessageAppService'),
  MessageService: Symbol('MessageService'),
  MessageRepository: Symbol('MessageRepository'),
  SocketAdapter: Symbol('SocketAdapter'),

  // Room
  RoomRouter: Symbol('RoomRouter'),
  CreateRoomController: Symbol('CreateRoomController'),
  FindAllRoomController: Symbol('FindAllRoomController'),
  RoomAppService: Symbol('RoomAppService'),
  RoomService: Symbol('RoomService'),
  RoomRepository: Symbol('RoomRepository'),
}
