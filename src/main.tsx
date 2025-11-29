import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './assets/MainPage'
import LoginPage from './assets/LoginPage'
import RegisterPage from './assets/RegisterPage'
import RolPage from './assets/RolPage'
import StreamerPage from './assets/StreamerPage'
import RegaloPage from './assets/RegaloPage'
import TerminosModal from './assets/TerminosModal'
import RegaloLista from './assets/RegaloLista'
import PaginaEspec from './assets/PaginaEspec'
import OverlayDeReg from './assets/OverlayDeRegalo'

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Elemento #root no encontrado en index.html')

createRoot(rootEl).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/roles' element={<RolPage />} />
        <Route path='/streamer' element={<StreamerPage />} />
        <Route path='/regalos' element={<RegaloPage />} />
        <Route path='/Terminos' element={<TerminosModal/>} />
        <Route path='/RegaloLista' element={<RegaloLista/>} />
        <Route path='/PaginaEspec' element={<PaginaEspec/>} />
        <Route path='/OverlaydeReg' element={<OverlayDeReg gift={null}/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)