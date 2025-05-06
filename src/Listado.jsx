import React from 'react'
import  Cita  from './Cita.jsx'

const Listado = ({setCitas,listado}) => {
  const borrar = (id) => {
    console.log(id);
    // encuentra el índice del elemento con el id dado
    const index = listado.findIndex((item) => item.id === id);

    if (index !== -1) {
    //creamos una copia del array listado
    let auxListado = [...listado];
    
    //eliminar el elemento en el id encontrado
    auxListado.splice(index, 1);
    
    //actualiza el estado con el nuevo array
    setCitas(auxListado);

    } else {
    console.log("Elemento no encontrado");
    }
  }

  console.log(listado)

  return (
    <>
        <div className="one-half column">
        <h2>Administra tus citas</h2>
        {//recorro el listado para mostrar cada cita 
        listado.map(item=>(
          <Cita key={item.id} item={item} borrar={borrar}/>
        ))
        }
        </div>
    </>
  )
}
export default Listado
