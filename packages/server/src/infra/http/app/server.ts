import { Express, Router } from "express"

import { ErrorMiddleware } from "../middleware/error"

export interface ServerProps {
  port: string
  app: Express
  router: Router
  cluster?: ({}) => void
}

export const server = ({ port, app, router, cluster }: ServerProps) => {
  app.use(router)

  app.use(ErrorMiddleware)

  if (cluster) {
    cluster({ app, port: Number(port) })
  } else {
    app.listen(port, () => console.log(`[server]: running on port ${port}`))
  }
}
