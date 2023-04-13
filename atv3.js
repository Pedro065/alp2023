let preco_comb= prompt("Digite preço do litro do combustível");
let valor_abast= prompt("Digite o valor do abastecimento");
preco_comb = Number(preco_comb);
valor_abast = Number(valor_abast);
let litros=valor_abast/preco_comb;
document.write(`${valor_abast}/${preco_comb}=${litros}`);

