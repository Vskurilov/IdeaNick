import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import { trpcRouter } from './trpc'
import corm from 'cors'
const expressApps = express()

expressApps.get('/ping', (req, res) => {
    res.send('pong')
})

expressApps.use(corm())

expressApps.use('/trpc', trpcExpress.createExpressMiddleware({
router: trpcRouter,
})
)

expressApps.listen(3000, () => {
    console.info('Listening at http://localhost:3000');
})