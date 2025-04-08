var n1 = Number.parseInt(window.prompt('digite um numero:'));
var n2 = Number.parseInt(window.prompt('digite outro numero numero:'));

var soma = n1 + n2;
window.alert('A soma dos valores é: ' + soma); 
// o + serve aqui serve para concatenar (unir no caso os numeros citados)
// number + number = adição
// string + string = concatenação/união

// exemplo02
// deixar com que o JS decida se for float ou int (a depender do que o usuario digitar)
var n3 = Number(window.prompt('digite um numero:'));
var n4 = Number(window.prompt('digite outro numero numero:'));

var soma2 = n3 + n4;
window.alert('A soma dos valores é: ' + soma2); 

// exemplo03
// transformar numero para string
var n5 = Number(window.prompt('digite um numero:'));
var n6 = Number(window.prompt('digite outro numero numero:'));

var soma3 = n5 + n6;
window.alert('A soma dos valores é: ' + String(soma3)); 

// 
