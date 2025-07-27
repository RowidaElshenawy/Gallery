
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './routes/AppRouter'
import { Provider } from 'react-redux'
import { persistor, store } from './redux';
import "./services/Axios-global.js"
import { PersistGate } from 'redux-persist/integration/react';




createRoot(document.getElementById('root')!).render(
  <Provider store={store }>
    <PersistGate  loading={null} persistor={persistor} >
        <AppRouter/>
    </PersistGate>
  </Provider>
)
