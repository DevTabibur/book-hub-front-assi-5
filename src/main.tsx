
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes.tsx';
import { Provider } from 'react-redux'
import store from '../redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>


  </>,
)
