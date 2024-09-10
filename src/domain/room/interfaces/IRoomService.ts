import { type IRoom } from '../entities/Room'

export interface IRoomService {
  create: (room: string) => Promise<IRoom>
  findAll: () => Promise<IRoom[]>
}
