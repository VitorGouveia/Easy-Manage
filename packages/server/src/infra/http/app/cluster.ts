import { Express } from 'express'

import cluster from 'cluster'
import { cpus } from 'os'
import process from 'process'

interface clusterModeProps {
  app: Express
  port: number
}

export const clusterMode = ({ app, port }: clusterModeProps) => {
  const allCPUs = cpus()

  if (cluster.isPrimary) {
    console.log(`[server]: primary process #${process.pid} is running`)

    // Fork workers.
    for (let i = 0; i < allCPUs.length; i++) {
      cluster.fork()
    }

    cluster.on('exit', worker => {
      console.log(`[server]: worker #${worker.process.pid} died`)
    })
  } else {
    app.listen(port, () => console.log(`[server]: running on port ${port}`))
  }
}
