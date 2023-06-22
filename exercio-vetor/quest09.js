var altura=[]
let soma=0
let maior=0
let media=0
for(i=0;i<10;i++){
    altura[i]=Number(prompt(`Digite o ${i+1}º numero`))
    soma=soma+altura[i]
    media=soma/altura.length;
    if(media < altura[maior]){
        maior=i
    }

}
document.write(`Alturas dos atletas=[${altura}] <br>`)

document.write(`Media dos Atletas=[${media}] <br>`)

document.write(`Alturas dos atletas maior do que a media é ${altura[maior]}`)


