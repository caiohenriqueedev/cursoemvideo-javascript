var nome = window.prompt('qual é seu nome?');

document.write(`Olá, <strong>${nome}</strong>! seu nome tem ${nome.length} letras</br>`);

document.write(`seu nome em maisculas é ${nome.toUpperCase()}</br>`);

document.write(`Seu nome em minusculas é ${nome.toLowerCase()}`);