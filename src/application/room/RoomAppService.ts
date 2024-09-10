import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'

import { type IRoom } from '@domain/room/entities/Room'
import { IRoomService } from '@domain/room/interfaces/IRoomService'

@injectable()
export default class RoomAppService {
  constructor(
    @inject(tokens.RoomService)
    private readonly roomService: IRoomService
  ) {}

  async create(data: string): Promise<IRoom> {
    return await this.roomService.create(data)
  }

  async findAll(): Promise<IRoom[]> {
    return await this.roomService.findAll()
  }
}
