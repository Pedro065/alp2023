let a = Number(prompt("Digite o valor de (a)"));
let b = Number(prompt("Digite o valor de (b)"));
let c = Number(prompt("Digite o valor de (c)"));

let delt = (b**2) - 4*a*c;
let x1 = (-b + Math.sqrt(delt))/(2*a);
let x2 = (-b - Math.sqrt(delt))/(2*a);
if(a != 0){
    if(delt>0){
        document.write(`O valor de x1 é ${x1.toFixed(2)}<br>`);
        document.write(`O valor de x2 é ${(-x2.toFixed(2))}`);
    } else if(delt==0){
        document.write(`O valor de x1 é ${x1.toFixed(2)}<br>`);
        document.write(`O valor de x2 é ${(-x2.toFixed(2))}`);
    }
    else{
        document.write(`Não existe raizes reais para a equqção`);
    }
}

