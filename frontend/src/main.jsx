import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './routers/router.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import 'sweetalert2/dist/sweetalert2.js'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
