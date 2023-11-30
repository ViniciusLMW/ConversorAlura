//Converter dolar em reais
var valorDolar = prompt("Informe o valor em dolar a ser convertido:");
var cotacaoReais = 4.91;

var valorEmReais = valorDolar * cotacaoReais;

alert("Valor em reais é: R$" + valorEmReais.toFixed(2));

//Converter reais em bitcoin
var cotacaoBitCoin = 181738.62;

var valorEmBitCoin = valorEmReais / cotacaoBitCoin;

alert("Valor em BitCoin é: B$" + valorEmBitCoin.toFixed(8));

//Adicionar nome em frase
var nome = prompt("Qual seu nome?");

alert("Olá " + nome + " seu valor em Reais e BitCoin é: R$" + valorEmReais.toFixed(2));

//Converter ano luz em metros
var valorAnoLuz = 10
var velocidadeLuzEmMetros = 299792458;

var anoLuzEmMetros = valorAnoLuz * velocidadeLuzEmMetros;

alert("Valor ano luz em metros é: " + anoLuzEmMetros + "m");

//Converter temperatura em Celsius, Fahrenheit e Kelvin
var temp = prompt("Informe a temperatura atual:");

var tempKelvin = temp + 273.15
var tempFahrenheit = (temp * 9/5) + 32;

alert("Temperatura atual em Kelvin: " + tempKelvin + "K"
      + "\nTemperatura atual em Fahrenheit: " + tempFahrenheit + "F");
