import React, { useState, useMemo } from 'react';

function Componente() {
  const [contador, setContador] = useState(0);

  const valorCalculado = useMemo(() => {
    console.log('Calculando...');
    return contador * 2;
  }, [contador]);

  return (
    <div>
      <p>Valor calculado: {valorCalculado}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Componente;
