let vetor=[]
let par=0;
let impar=0;

for(i=0;i<10;i++){
    vetor[i]=Number(prompt(`Digite o ${i+1}º numero`))
    if (vetor[i]%2==0) {
        par++;
    }
    else{
        impar++;
    }
}
document.write(`Vetor=[${vetor}]<br>`)

document.write(`Aquantidade de numeros pares é ${par}<br>`)
document.write(`Aquantidade de numeros impares é ${impar}<br>`)