let ano = Number(prompt("Digite o ano"));

if (ano>=1) {
    if (ano%100 ==0 ){
        document.write(`O seculo é ${parseInt(ano/100)}`);
    } else{
        document.write(`O seculo é ${parseInt(ano/100) + 1}`);
    }

}
else{
    document.write("digite um ano valido");
}