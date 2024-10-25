import { PollContextProvider } from "./context"
import AppRoutes from "./Routes"

function App() {


  return (
    <>
      <PollContextProvider>
        <AppRoutes />
      </PollContextProvider>
    </>
  )
}

export default App
