import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <p>Tu nombre es: {nombre}</p>
    </div>
  );
}

export default Formulario;

