import React from 'react'

function Turnos({pacientes}) {
  return (
    <div>
      {pacientes.length > 0 && <h2>Turnos</h2>}
        
        {pacientes.map((paciente, index) => (
         <div key={index} className='card'>
            <h3>Nombre: {paciente.nombre} | Apellido: {paciente.apellido}</h3>
        </div>
        ))}
    </div>
  )
}

export default Turnos