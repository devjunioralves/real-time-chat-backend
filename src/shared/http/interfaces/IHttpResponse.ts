export interface HttpResponse {
  [key: string]: unknown
  statusCode?: number
  error?: HttpResponseError
}

export interface HttpResponseError {
  code: number
  message: {
    type: string
    value: string
  }
}
