import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './common/components/NavBar'

import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <div className='box'>
        <div className='box1'>
          <NavBar />
        </div>
          <App />
      </div>
    </HashRouter>
  </StrictMode>,
);
