//Numeros + Operadores
document.querySelector(".teclas").addEventListener("click",teclas);
//Resultado
document.getElementById("sr").addEventListener("click",showResult);

function teclas(e){
    let resultado = document.getElementById('resultado').innerHTML;
    let valor = e.target.innerHTML;
    document.getElementById('resultado').innerHTML = resultado + valor;
}

function showResult(){
    let actual = document.getElementById('resultado').innerHTML;
    let suma = actual.indexOf("+");
    let resta = actual.indexOf("-");
    let div = actual.indexOf("÷");
    let mult = actual.indexOf("x");
    if(suma !== -1){
        arr = actual.split("+",2);
        res = parseInt(arr[0]) + parseInt(arr[1]);
        document.getElementById("resultado").innerHTML = res;
    } else if (resta !== -1){
        arr = actual.split("-",2);
        res = parseInt(arr[0]) - parseInt(arr[1]);
        document.getElementById("resultado").innerHTML = res;
    } else if(div !== -1){
        arr = actual.split("÷",2);
        res = parseInt(arr[0]) / parseInt(arr[1]);
        document.getElementById("resultado").innerHTML = res;
    } else if (mult !== -1){
        arr = actual.split("*",2);
        res = parseInt(arr[0]) * parseInt(arr[1]);
        document.getElementById("resultado").innerHTML = res;
    }
}
