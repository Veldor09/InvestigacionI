import React, { useState, useCallback } from 'react';

function Lista({ obtenerElementos }) {
  const items = obtenerElementos();

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Componente() {
  const [contador, setContador] = useState(0);

  const obtenerElementos = useCallback(() => {
    return [contador, contador + 1, contador + 2];
  }, [contador]);

  return (
    <div>
      <Lista obtenerElementos={obtenerElementos} />
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Componente;
