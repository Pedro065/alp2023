let valor= Number(prompt("Digite o valor do produto"));
let desconto=valor * 30 /100;
let valor_pago= valor-desconto;
document.write(`O valor do desconto é ${desconto} e o valor a ser pago é ${valor_pago}`);
