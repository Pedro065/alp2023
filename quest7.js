let n1= Number(prompt("Digite o preco de custo do produto"));
let n2= Number(prompt("Digite o valor percentual "));
let preco= n1+(n1*n2/100);
document.write(`O preço do custo do produto junto com o acréscimo do valor percentual é ${preco}`);