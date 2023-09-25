alert("Bienvenido a la pagina Javascript");
var nom= prompt("Ingrese su Nombre y Apellido");
var res1 = prompt ("Como se llama el primer dia de la primavera?\nA:Primer Día de la Primavera\nB: Equinoccio de Primavera\nC: Equinoccio de Invierno"); 
if(res1=="B"){
    res1 = 25;
}else{
    res1 = 0;
}
var res2 = prompt("Que sucede en el Polo Norte cuándo llega la Primavera?\nA: 6 Meses de luz diurna ininterrumpida\nB: 6 Meses de oscuridad ininterrumpida\nC: 6 Meses de alternancia de luz y oscuridad");
if(res2=="A"){
    res2 = 25;
}else{
    res2 = 0
}
var res3 = prompt("En q mes empieza la primavera en el Hemisferio Norte?\nA: Setiembre\nB: Junio\nC: Marzo");
if(res3=="C"){
    res3 = 25;
}else{
    res3 = 0
}
var res4 = prompt("Ques es la fiesta de la Primavera en China?\nA: La navidad\nB: El año Nuevo\nC: Fiestas Patrias de China");
if(res4=="C"){
    res4 = 25;
}else{
    res4 = 0
}

var total = res1 + res2 + res3 + res4

document.write("<h1> Condicionales</h1>");
document.write("Respuestas <br>");
document.write(nom + "tus resultados son <br>");
document.write(total + "% de respuestas correctas")

