let altura = Number(prompt("digite sua altura"));
let peso = Number (prompt("digite seu peso"))

let imc= peso/(altura**2);

if(imc<18.5){
    document.write(" Você esta abaixo do peso");
}else if(imc>18.5 && imc<24.9){
    document.write(" Você esta com peso normal");
}else if(imc>25 && imc<29.9){
    document.write(" Você esta sobrepeso");
}else if(imc>30 && imc<34.9){
    document.write(" Você esta com obesidade grau I");
}else if(imc>35 && imc<39.9){
    document.write(" Você esta com obesidade grau II");
}else if(imc>=40){
    document.write(" Você esta com obesidade grau III");
}


