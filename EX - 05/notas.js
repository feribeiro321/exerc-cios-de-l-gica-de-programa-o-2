var nota_1 = parseFloat(prompt("Digite a 1ª nota: "));
var nota_2 = parseFloat(prompt("Digite a 2ª nota: "));

var media = parseFloat((nota_1+nota_2)/2);

if (media >= 7 && media < 10 ){
    console.log("Aprovado");
    alert("Aprovado")
}else if(media < 7){
    console.log("Reprovado");
    alert("Reprovado");   
}else if (media == 10){
    
    console.log("Aprovado com Distinção");
    alert("Aprovado com Distinção");
}

