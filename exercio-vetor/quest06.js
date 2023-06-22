var vetor=[]
let qPar=0;
let qImpar=0;

for (i=0;i<10;i++){
vetor[i]=Number(prompt(`Digite o ${i+1} número`))
if  ( vetor[i]% 2 == 0 ) {
            qPar ++ ;
        }
        else {
            qImpar ++ ;
            
        }
}
document.write(`[${vetor}]<br>`)
    
document.write(`A quantidade de numero pares é ${qPar}<br>`)

document.write(`A quantidade de numeros ímpares é ${qImpar} `)