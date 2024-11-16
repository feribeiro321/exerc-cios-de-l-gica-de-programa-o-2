var letra = prompt("Digite 'F' para feminino ou 'M' parar masculino: ");

if (letra == "F" || letra == "f"){
    console.log(letra," - Feminino.");
    alert(letra+" - Feminino.");
    
}else if(letra == "M" || letra == "m"){
    console.log(letra," - Masculino.");
    alert(letra+" - Masculino.");
}else{
    console.log(letra, " - Sexo inválido.");
    alert(letra+" - Sexo inválido.");

}
