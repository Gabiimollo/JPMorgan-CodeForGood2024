import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { useState } from 'react';
import './App.css'

import  Login from './pages/login.jsx'
import  ListaEspera from './pages/listaEspera.jsx'
import  InfoPaciente from './pages/infoPaciente.jsx'
import  PantallaEspera from './pages/pantallaEspera.jsx'
import  AlertaStadingCordinator from './pages/alertaStadingCordinator.jsx'
import PantallaConsultorio from './pages/pantallaConsultorio.jsx'
import  Recepcion from './pages/recepcion.jsx'
import  BuscarPaciente from './pages/buscarPaciente.jsx'

import {Button} from "@nextui-org/react";


function App() {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <>
      <Router>
        {/* Botón flotante para mostrar/ocultar el header */}
        <button
          onClick={() => setShowHeader((v) => !v)}
          style={{
            position: 'fixed',
            top: 20,
            right: 20,
            zIndex: 200,
            background: '#0072F5',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: 48,
            height: 48,
            fontSize: 28,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label={showHeader ? 'Ocultar menú' : 'Mostrar menú'}
        >
          {showHeader ? '×' : '≡'}
        </button>
        {/* Header flotante y ocultable */}
        {showHeader && (
          <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            zIndex: 150,
            background: '#fff',
            boxShadow: '0 2px 16px rgba(0,0,0,0.13)',
            padding: '18px 0 14px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animation: 'fadeInDown 0.2s',
          }}>
            <nav style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '100vw',
            }}>
              <Link to="/login" onClick={() => setShowHeader(false)}><Button color="primary" variant="flat">Login</Button></Link>
              <Link to="/lista_espera" onClick={() => setShowHeader(false)}><Button color="primary" variant="flat">Lista de Espera</Button></Link>
              <Link to="/pantalla_espera" onClick={() => setShowHeader(false)}><Button color="primary" variant="flat">Pantalla de Espera</Button></Link>
              <Link to="/pantalla_consultorio" onClick={() => setShowHeader(false)}><Button color="primary" variant="flat">Pantalla Consultorio</Button></Link>
              <Link to="/alerta_standing_cordinator" onClick={() => setShowHeader(false)}><Button color="primary" variant="flat">Alerta Standing Cordinator</Button></Link>
              <Link to="/recepcion" onClick={() => setShowHeader(false)}><Button color="primary" variant="flat">Recepción</Button></Link>
              <Link to="/buscar_paciente" onClick={() => setShowHeader(false)}><Button color="primary" variant="flat">Buscar Paciente</Button></Link>
            </nav>
          </header>
        )}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/lista_espera" element={<ListaEspera />} />
          <Route path="/info_paciente/:id" element={<InfoPaciente />} />
          <Route path="/pantalla_espera" element={<PantallaEspera />} />
          <Route path="/pantalla_consultorio" element={<PantallaConsultorio />} />
          <Route path="/alerta_standing_cordinator" element={<AlertaStadingCordinator />} />
          <Route path="/recepcion" element={<Recepcion />} />
          <Route path="/buscar_paciente" element={<BuscarPaciente />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
