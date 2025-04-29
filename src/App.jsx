import React from 'react'
import  Formulario  from './Formulario.jsx'
import './App.css'
import  Listado  from './Listado.jsx'
import './Formulario.css'
import './Listado.css'
import './Cita.css'

function App() {
  

  return (
    <div class="container">
      <h1>Administra tus citas</h1>
      <div class="row">
        
        <Formulario/>
        <Listado/>
      </div>
    </div>

  )
}

export default App
