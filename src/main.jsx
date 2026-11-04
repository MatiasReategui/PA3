import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import { SolicitudesProvider } from './context/SolicitudesContext.jsx'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <SolicitudesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SolicitudesProvider>
    </ReduxProvider>
  </StrictMode>,
)
