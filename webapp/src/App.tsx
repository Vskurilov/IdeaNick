import { TrpcProvider } from '../lib/trpc'
import { AllideasPage } from '../pages/AllideasPage/index'

const ssst:string = 1
export const App = () => {
  return (
    <TrpcProvider>
      <AllideasPage />
    </TrpcProvider>
  )
}
