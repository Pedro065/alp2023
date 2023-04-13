let cot_dolar= prompt("Digite um valor em dolar");
let quant_reais= prompt("Digite um valor em reais");
cot_dolar = Number(cot_dolar);
quant_reais = Number(quant_reais);
let valor_dolar=quant_reais/cot_dolar;
document.write(`${quant_reais} / ${cot_dolar}=${valor_dolar}`);

