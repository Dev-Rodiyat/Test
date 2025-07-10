import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        toastClassName="dark:bg-zinc-700 dark:text-white bg-white text-black"
        bodyClassName="text-sm"
        hideProgressBar={false}
        autoClose={3000}
        closeOnClick
        pauseOnHover
      />
      <App />
    </BrowserRouter>
  </StrictMode>
)
