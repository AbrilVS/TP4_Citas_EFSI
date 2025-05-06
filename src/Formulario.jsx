import React, {useState} from 'react'

const Formulario = ({setCitas, citas}) => {
  const [contador,setContador] = useState(0);
  const mandarCita =()=>{
    //obtengo el valor de los campos 
    const nombre = document.getElementById('masc').value;
    const dueno = document.getElementById('dueno').value;
    const fecha = document.getElementById('date').value;
    const hora = document.getElementById('hour').value;
    const sintomas = document.getElementById('sint').value;
    
    //verificamos que esten todos los campos completos
    if(nombre === "" && dueno === "" && fecha === "" && hora === "" && sintomas === ""){
      alert("Todos los campos deben ser completados")
    }
    else{
       //crea el obj
       const objnuevo = {
        id:contador,
        nombre: nombre,
        dueno: dueno,
        fecha: fecha,
        hora: hora,
        sintomas: sintomas
      }
    
      //meto en la lista
      let aux = [...citas,objnuevo];
      setCitas(aux)
      setContador(contador+1);

      //limpiar el form 
      document.getElementById('masc').value="";
      document.getElementById('dueno').value="";
      document.getElementById('date').value="";
      document.getElementById('hour').value="";
      document.getElementById('sint').value="";
    }
  }

  return (
    <>
    <div className="one-half column">

    <h2>Crear mi Cita</h2>
    <form>
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" id='masc'></input>
        
        <label>Nombre Dueño</label>
        <input type="text" name="propietario" className="u-full-width"placeholder="Nombre dueño de la mascota" id='dueno'></input>
        
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" id='date'></input>
      
        <label>hora</label>
        <input type="time" name="hora" className="u-full-width" id='hour'></input>
      
        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width" id='sint'></textarea>
        
        <button type="button" className="u-full-width button-primary" onClick={()=>mandarCita()}>Agregar Cita</button>
        </form>
        </div>
    </>
    
  )
};

export default Formulario;

