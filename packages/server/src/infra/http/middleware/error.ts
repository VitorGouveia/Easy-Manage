import "express-async-errors"
import { Request, Response } from "express"

export const ErrorMiddleware = (
  error: Error,
  request: Request,
  response: Response
) => {
  /* default error status is 400 */
  let status = 400

  /* searches for a found & find words in the response message */
  const ErrorIsNotFound = error.message.match(/found|find/)

  if (ErrorIsNotFound) {
    status = 404
  }

  return response.status(status).json({
    name: error.name,
    message: error.message
  })
}
