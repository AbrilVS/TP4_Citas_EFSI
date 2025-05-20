import React, { useEffect, useState } from 'react';
import Formulario from './Formulario.jsx';
import Listado from './Listado.jsx';
import './App.css';
import './Formulario.css';
import './Listado.css';
import './Cita.css';

function App() {
  const [citas, setCitas] = useState(() => {
    const citasGuardadas = localStorage.getItem('Citas');
    if(citasGuardadas!=null){
      return JSON.parse(citasGuardadas)
    }else{
      return []
    }
  });


  useEffect(() => {
    localStorage.setItem('Citas', JSON.stringify(citas));
  }, [citas]);

  return (
    <div className="container">
      <h1>Administra tus citas</h1>
      <div className="row">
        <Formulario setCitas={setCitas} citas={citas} />
        <Listado listado={citas} setCitas={setCitas} />
      </div>
    </div>
  );
}

export default App;
