import React from 'react'

const Cita = ({borrar,item}) => {
  console.log({item})

  return (
    <>
    <div className="cita">
      {/*agrego a cada campo su valor*/}
        <p>Mascota: <span>{item.nombre}</span></p>
        <p>Dueño: <span>{item.dueno}</span></p>
        <p>Fecha: <span>{item.fecha}</span></p>
        <p>Hora: <span>{item.hora}</span></p>
        <p>Sintomas: <span>{item.sintomas}</span></p>
        <button className="button elimnar u-full-width" onClick={()=>borrar(item.id)}>Eliminar×</button>
    </div>
    </>
  )
}

export default Cita;