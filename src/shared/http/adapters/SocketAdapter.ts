import { tokens } from '@di/tokens'
import MessageService from '@domain/message/services/MessageService'
import { Server } from 'socket.io'
import { inject, injectable } from 'tsyringe'

@injectable()
export class SocketAdapter {
  private io!: Server

  constructor(
    @inject(tokens.MessageService)
    private readonly messageService: MessageService
  ) {}

  initialize(httpServer: any): void {
    this.io = new Server(httpServer, {
      cors: {
        origin: '*',
      },
    })

    this.io.on('connection', (socket) => {
      socket.on('sendMessage', async (data) => {
        await this.messageService.create(data)
        this.io.emit('new_message', data)
      })

      socket.on('disconnect', () => {
        console.log('User disconnected', socket.id)
      })
    })
  }
}
