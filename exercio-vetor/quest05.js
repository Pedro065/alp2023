var vetor =[]

for(i=0;i<10;i++){
    vetor[i]=Number(prompt(`Digite o ${i+1}º numero`))

}
document.write(`vetor=[${vetor}]<br>`)

for(let i=0, j = vetor.length-1; i<(vetor.length/2); i++, j--)
{
    let aux= vetor[j]
    vetor[j]=vetor[i]
    vetor[i]=aux  

}

document.write(`vetor=[${vetor[i]}]`)