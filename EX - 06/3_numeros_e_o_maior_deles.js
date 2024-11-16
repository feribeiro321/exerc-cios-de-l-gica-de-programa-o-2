var num_1 = parseInt(prompt("Digite um número: "));
var num_2 = parseInt(prompt("Digite mais um número, que seja diferente do primeiro: "));
var num_3 = parseInt(prompt("Digite mais um número, que seja difrente do primeiro e do segundo: "));

if (num_1 > num_2 && num_1 > num_3){
    console.log(num_1);
    alert(num_1);
}else if(num_2 > num_1 && num_2 > num_3){

    console.log(num_2);
    alert(num_2);
}else {
    console.log(num_3);
    alert(num_3);
}