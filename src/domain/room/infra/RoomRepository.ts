import { injectable } from 'tsyringe'
import Room, { type IRoom } from '../entities/Room'
import { type IRoomRepository } from '../interfaces/IRoomRepository'

@injectable()
export default class RoomRepository implements IRoomRepository {
  async create(room: string): Promise<IRoom> {
    const newRoom = new Room({
      name: room,
    })
    return newRoom.save()
  }

  async findAll(): Promise<IRoom[]> {
    return Room.find()
  }
}
