import { Express, Router } from 'express'

export interface ServerProps {
  port: string
  app: Express
  router: Router
  cluster?: ({}) => void
}

export const server = ({ port, app, router, cluster }: ServerProps) => {
  app.use(router)

  if (cluster) {
    cluster({ app, port: Number(port) })
  } else {
    app.listen(port, () => console.log(`[server]: running on port ${port}`))
  }
}
