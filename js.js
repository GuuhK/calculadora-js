function insert(numero){
    var numero1 = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero1 + numero
}
function clean(){
    document.getElementById('resultado').innerHTML = ('');
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
document.getElementById('resultado').innerHTML = "Impossível..."
    }
}