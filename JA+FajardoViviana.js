const fin = (total) => {console.log(`PROCESO COMPLETO, EL TOTAL DE PALABRAS ES ${total}`);};
  
  const mostrarLetras = (texto, fin, intervalo = 1000) => {
    let contador = 0;
    return new Promise((resolve, reject) => {
      let timer = setInterval(() => {
        if (texto[contador]) {
          console.log(texto[contador]);
          contador++;
        } else {
          clearInterval(timer);
          fin(contador);
          resolve();
        }
      }, intervalo);
    });
    
  };
  
  mostrarLetras('Me', fin)
    .then(() => mostrarLetras('llamo', fin))
    .then(() => mostrarLetras('viviana', fin));