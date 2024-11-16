var p1 = parseFloat(prompt("Digite o valor do primeiro produto: "));
var p2 = parseFloat(prompt("Digite o valor do segundo produto: "));
var p3 = parseFloat(prompt("Digite o valor do terceiro produto: "));

if (p1 < p2 && p1 < p3){
    console.log("Devo comprar o primeiro produto.");
    alert("Devo comprar o primeiro produto.");
}else if (p2 < p1 && p2 < p3){
    console.log("Devo comprar o segundo produto.");
    alert("Devo comprar o segundo produto.");
}else {
    console.log("Devo comprar o terceiro produto.");
    alert("Devo comprar o terceiro produto.");
}