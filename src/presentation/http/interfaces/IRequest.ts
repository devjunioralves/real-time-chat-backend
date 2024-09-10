export interface IRequest {
  body: Record<string, unknown>
  params: Record<string, string>
  query: Record<string, unknown>
  headers: Record<string, unknown>
}
