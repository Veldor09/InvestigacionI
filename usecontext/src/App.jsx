import React, { useState, useContext } from 'react';

const TemaContexto = React.createContext();

function ProveedorTema({ children }) {
  const [tema, setTema] = useState('claro');

  return (
    <TemaContexto.Provider value={{ tema, setTema }}>
      {children}
    </TemaContexto.Provider>
  );
}

function BotonTema() {
  const { tema, setTema } = useContext(TemaContexto);

  return (
    <button onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')}>
      Cambiar a {tema === 'claro' ? 'oscuro' : 'claro'}
    </button>
  );
}

function App() {
  return (
    <ProveedorTema>
      <BotonTema />
    </ProveedorTema>
  );
}

export default App;

