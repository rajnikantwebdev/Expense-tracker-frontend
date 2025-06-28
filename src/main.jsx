import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RefreshContextProvider from './components/ContextApi.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RefreshContextProvider>
      <ToastContainer />
      <App />
    </RefreshContextProvider>
  </StrictMode>
);
