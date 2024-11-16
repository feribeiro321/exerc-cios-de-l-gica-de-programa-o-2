var letra = prompt("Digite uma letra");

if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra =="u" || letra == "A" ||letra == "E" || letra == "I" || letra == "O" || letra == "U"){
    console.log(letra, " é uma vogal");
    alert(letra+ " é uma vogal");

}else if(letra == "y" || letra == "Y"){
    console.log(letra, " no português brasileiro, é considerada vogal.");
    alert(letra+ " no portuges brasileiro, é considerada vogal.");

}else{
    console.log(letra, " é uma consoate");
    alert(letra+ " é uma consoate");
}