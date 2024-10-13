import { RouterProvider } from "react-router-dom"
import router from "./routes/Routes"
import { store } from "./redux/store"
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';



function App() {
  return <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster />
  </Provider>
}

export default App
