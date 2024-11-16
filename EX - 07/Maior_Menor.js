var num_1 = parseInt(prompt("Digite um número: "));
var num_2 = parseInt(prompt("Digite mais um número, de preferência que seja diferente do primeiro: "));
var num_3 = parseInt(prompt("Digite mais um número, de preferência difrente do primeiro e do segundo: "));

if(num_1 > num_2 && num_1 > num_3){

    console.log(num_1, ", Maior");
    alert(num_1+", Maior")
    
}else if(num_2 > num_1 && num_2 > num_3){
   
    console.log(num_2,", Maior");
    alert(num_2+" Maior");
 
}else {
    console.log(num_3,", Maior");
    alert(num_3+", Maior");
    
}if(num_1 < num_2 && num_1 < num_3){
    console.log(num_1,", Menor");
    alert(num_1+", Menor");
    
}else if(num_2 < num_1 && num_2 < num_3){
    console.log(num_2,"Menor");
    alert(num_2+", Menor");

}else{
    console.log(num_3,", Menor");
    alert(num_3+", Menor");

}
