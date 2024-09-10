import { type IRoom } from '../entities/Room'

export interface IRoomRepository {
  create: (room: string) => Promise<IRoom>
  findAll: () => Promise<IRoom[]>
}
