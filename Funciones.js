
function mostrar() {
    var canvas= document.getElementById("Canvas")
    var ctx= canvas.getContext("2d");

    for (var i=0; i<600;){
        ctx.moveTo(0,i);
        ctx.lineTo(600,i);
        ctx.strokeStyle= "#000"
        ctx.stroke();
        i=i+1;
    }
    for (var i=0; i<600;){
        ctx.moveTo(i,0);
        ctx.lineTo(i,600);
        ctx.strokeStyle= "#000"
        ctx.stroke();
        i=i+1;
    }
}
function Cuadrado() {
    p=1;
    a=1;
}
function Triangulo() {
    document.getElementById("num2").style.display= "block";
    document.getElementById("num3").style.display= "block";
    p=2;
    a=2;
}

function perimetro() {
        var num1= document.getElementById("num1").value;
        var perimetro= parseInt(num1)*4;
        alert('El perimetro es '+ perimetro);
}
function area() {
        var num1= document.getElementById("num1").value;
        var area= parseInt(num1)*parseInt(num1);
        alert('El area es '+ area);

    }
function peri() {
    var num2= document.getElementById("num2").value;
    var num3= document.getElementById("num3").value;
    var num4= document.getElementById("num4").value;
    var perimetro= parseInt(num2)+ parseInt(num3)+parseInt(num4);
    alert('El perimetro es '+ perimetro);
}
function are() {
    var num2= document.getElementById("num2").value;
    var num3= document.getElementById("num3").value;
    var num4= document.getElementById("num4").value;
    var area= (parseInt(num2)+ parseInt(num3))/2;
    alert('El area es '+ area);
}

