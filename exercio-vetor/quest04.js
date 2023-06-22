let vetor=[]

for(i = 0 ; i<10;i++){
    vetor[i]= Math.floor(Math.random(vetor)*100) ;
}
document.write(`${vetor[i]}`)

for(i = 0 ; i<vetor.length;i++){
   document.write(`Posição: ${i} | Elemento: ${vetor[i]}<br>`)
}