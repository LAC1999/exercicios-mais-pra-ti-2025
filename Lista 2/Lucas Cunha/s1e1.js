function ehDataValida(dia, mes, ano){
    if(mes<1 || mes>12){
        return false;
    }

    const ultimoDiaDoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

     if (ano % 4 === 0) {
    if (ano % 100 !== 0 || (ano % 400 === 0)) {
      diasPorMes[1] = 29;
    }
  }

  return dia >= 1 && dua <= ultimoDiaDoMes[mes-1];
}

console.log(ehDataValida(1,1,1)); //para testar troque os 1s pelo dia mes e ano desejado