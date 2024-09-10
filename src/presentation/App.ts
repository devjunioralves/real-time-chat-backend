import { container } from '@di/container'
import { tokens } from '@di/tokens'
import { SocketAdapter } from '@shared/http/adapters/SocketAdapter'
import bodyParser from 'body-parser'
import cors from 'cors'
import express, { Router } from 'express'
import http from 'http'
import { type Routes } from './http/Routes'

const router = Router()
const routes = container.resolve<Routes>(tokens.Routes)

routes.setupRouter(router)

const app = express()
const server = http.createServer(app)
const socketAdapter = container.resolve(SocketAdapter)
socketAdapter.initialize(server)
server.listen(5000)

app.use(
  cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'],
  })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

export default app
