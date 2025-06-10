function debounce(fn, delay){
    let timeout;
    return function(...args){
        if(timeout){
            return;
        }

        timeout=setTimeout(()=>{
            fn.apply(this, args);
            timeout=null;

        }, delay);
    };
}

const log = () => console.log("Obunga");
const debounceLog = debounce(log, 1000); // para alterar o tempo de espera em ms, altere o valor 1000



debounceLog();
debounceLog();
debounceLog();
setTimeout(debounceLog, 1500);