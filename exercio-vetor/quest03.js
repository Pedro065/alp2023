let v=[];
for(let i = 0; i<8;i++){
    v[i]= Number(prompt(`Digite o ${i+1}º número`));
}

let n =  Number(prompt(`Digite o número que deseja marcar`));

let posicao = -1;

for(let i = 0; i<v.length;i++){
    if(n==v[i]){
        posicao=i;
        document.write(`${n} encotrado na posição ${posicao}<br>`);
    }
}

if (posicao==-1){
    document.write(`${n} não encotrado `);
}