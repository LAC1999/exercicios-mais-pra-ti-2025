function fatorial(n){
    if(n < 0){
        throw new Error("N menor que 1")
    }
    if( n === 0 || n === 1){
        return 1;
    }
    return n*fatorial(n-1);
}

try{
    console.log(fatorial(-1));
} catch(err){
    console.error("Erro: ", err.message);
}