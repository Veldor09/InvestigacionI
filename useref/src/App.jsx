import React, { useRef, useEffect } from 'react';

function EnfocarInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" placeholder="Escribe aquí..." />;
}

export default EnfocarInput;

