const bytes = [
    [1, 0, 0, 1, 1, 1, 0, 1],
    [0, 1, 1, 0, 0, 1, 0, 1],
    [0, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 1, 0, 0],
    [1, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0, 1, 1, 1],
    [0, 0, 1, 1, 0, 0, 0, 0],
  ];
  
  function bytes_a_comprobar(fila) {
    let paridad = 0;
    for (let bit of fila) {
      paridad ^= bit; 
    }
    return paridad % 2 === 0;
  }
  
  for (const fila of bytes) {
    const esPar = bytes_a_comprobar(fila);
    console.log(`Fila: ${fila.join(', ')} - Paridad: ${esPar ? 'Par' : 'Impar'}`);
  }
  

  
