var nome = window.prompt('qual é seu nome?');

document.write(`Olá, <strong>${nome}</strong>! seu nome tem ${nome.length} letras</br>`);

document.write(`seu nome em maisculas é ${nome.toUpperCase()}</br>`);

document.write(`Seu nome em minusculas é ${nome.toLowerCase()}`);

// n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) - Formata o número n1 (variavel) como moeda brasileira (R$), seguindo o padrão do português do Brasil, 
// mas pode mudar conforme o muda o currency ali (moeda) por ex: USD, EUR //

// teste... testando