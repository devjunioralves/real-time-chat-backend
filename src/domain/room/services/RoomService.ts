import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'

import { type IRoom } from '../entities/Room'
import { IRoomRepository } from '../interfaces/IRoomRepository'
import { type IRoomService } from '../interfaces/IRoomService'

@injectable()
export default class RoomService implements IRoomService {
  constructor(
    @inject(tokens.RoomRepository)
    private readonly roomRepository: IRoomRepository
  ) {}

  async create(room: string): Promise<IRoom> {
    const savedMessage = await this.roomRepository.create(room)
    return savedMessage
  }

  async findAll(): Promise<IRoom[]> {
    const rooms = await this.roomRepository.findAll()
    return rooms
  }
}
