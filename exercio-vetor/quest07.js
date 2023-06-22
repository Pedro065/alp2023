var n =[]

for(i=0;i<10;i++){
    n[i]=Number(prompt(`Digite o ${i+1}º numero`))

}
document.write(`N=[${n}]<br>`)

let posicao_menor=0;

for(i=0;i<10;i++){
    if(n[i]< n[posicao_menor]){
        posicao_menor=i;
    }
}

document.write(`O menor elemento de N é ${n[posicao_menor]} e sua posição é ${posicao_menor}`)