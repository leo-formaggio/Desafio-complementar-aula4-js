// Cálculo ICMS
var somar = (a, b) => a + b;
var subtrair = (a, b) => a - b;
var calcICMS = x => x * 0.18;

var precoProd = parseFloat(prompt("-Cálculo ICMS- Insira o valor do produto:"));
var desconto = 18;

var icms = calcICMS(precoProd);
var soma = somar(precoProd, icms);
var novoProd = subtrair(soma, desconto);

alert(novoProd);

// Mostrar paridade entre 2 números 
function paridade() {
    var num = parseInt(prompt("-Paridade- Digite um número:"));
    var mult = parseInt(prompt("Digite um número múltiplo:"));
    
    if (num % mult == 0) {
        alert(num + " é múltiplo de " + mult)
    } else {
        alert(num + " não é múltiplo de " + mult)
    }
};

paridade();