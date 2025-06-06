let palavras = [];
let frase = "frase de de exemplo"; //editar para testar diferentes frases

function separaPalavras(frase){
    let palavra="";
    let contador = 0; //conta quantas palavras estao no array palavras
    const stringLength = frase.length;

    for(i = 0; i < stringLength; i++){
        let char = frase[i];

        if(isLetter(char)){
            palavra +=char.toLowerCase();
        } else if (palavra && !palavras.includes(palavra)){
            palavras.push(palavra);
            contador++;
            palavra = "";
        }
}
    if(palavra && !palavras.includes(palavra)){ //para a ultima palavra da string
        palavras.push(palavra);
        contador++;
    }
    for(j = 0; j < palavras.length; j++){
        console.log(palavras[j]);
    }
}

function isLetter(char){
    return /^[a-zA-Z]$/.test(char);
}

separaPalavras(frase);