/**
 * Calcular el perimetro de un cuadrado
 * @method perimetro
 * @param num1 que es ingresado por el usuario
 * @return valor del perimetro del caudrado
 */
function perimetro() {
        var num1= document.getElementById("num1").value;
        var perimetro= parseInt(num1)*4;
        alert('El perimetro es '+ perimetro);
}
/**
 * Calcular el area de un cuadrado
 * @method area
 * @param num1 que es ingresados por el usuario
 * @return valor del area del caudrado
 */
function area() {
        var num1= document.getElementById("num1").value;
        var area= parseInt(num1)*parseInt(num1);
        alert('El area es '+ area);

}

/**
 * Calcular el perimetro de un triangulo
 * @method peri
 * @param num2, num3, num4 que son ingresados por el usuario
 * @return valor del perimetro del triangulo
 */
function peri() {
    var num2= document.getElementById("num2").value;
    var num3= document.getElementById("num3").value;
    var num4= document.getElementById("num4").value;
    var perimetro= parseInt(num2)+ parseInt(num3)+parseInt(num4);
    alert('El perimetro es '+ perimetro);
}

/**
 * Calcular el area de un triangulo
 * @method are
 * @param num2, num3, num4 que son ingresados por el usuario
 * @return valor del area del triangulo
 */
function are() {
    var num2= document.getElementById("num2").value;
    var num3= document.getElementById("num3").value;
    var num4= document.getElementById("num4").value;
    var area= (parseInt(num2)+ parseInt(num3))/2;
    alert('El area es '+ area);
}

/**
*Dibuja un cuadrado a partir de una lado que es ingresado por el usuario
 * @method dibujarCuadrado
 * @param no tiene
 * @return el cuadrodo graficado en canvas
 */
function dibujarCuadrado(){
    var canvas = document.getElementById('canvas1');
    var ctx = canvas.getContext('2d');
    var lado = parseFloat(document.getElementById('num1').value)

    ctx.fillStyle = "#333899";
    ctx.fillRect(45,45,lado,lado);
}

/**
 *Dibuja un triangulo a partir de los parametros entragados por el usuario
 * @method dibujarTriangulo
 * @param no tiene
 * @return el triangulo graficado en canvas
 */

function dibujarTriangulo() {
    var canvas = document.getElementById('canvas2');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        var ladoT1 = parseFloat(document.getElementById('num2').value);
        var ladoT2 = parseFloat(document.getElementById('num3').value);
        var ladoT3 = parseFloat(document.getElementById('num4').value);
        var px = canvas.width/2;
        var py = canvas.height/2;
        ctx.beginPath();
        ctx.moveTo(px,ladoT1);
        ctx.lineTo(ladoT1,ladoT2);
        ctx.lineTo(ladoT2,py);
        ctx.fillStyle = "#333899";
        ctx.closePath();
        ctx.fill();
    }
}