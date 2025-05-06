import React, {useState} from 'react'
import  Formulario  from './Formulario.jsx'
import './App.css'
import  Listado  from './Listado.jsx'
import './Formulario.css'
import './Listado.css'
import './Cita.css'

function App() {
const [citas, setCitas]=useState([]);

  return (
    <div className="container">
      <h1>Administra tus citas</h1>
      <div className="row">
        
        <Formulario setCitas={setCitas} citas={citas}/>
        <Listado listado={citas} setCitas={setCitas}/>
      </div>
    </div>

  )
}

export default App
