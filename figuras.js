    // Cuadrado = variables

    // console.group("Cuadrado");
    // const ladosCuadrado = 5;
    // console.log ("Los lados del cuadrado miden " + ladosCuadrado + "cms");

    // const perimetroCuadrado = ladosCuadrado * 4;
    // console.log ("El perímetro cuadrado es " + perimetroCuadrado + "cms");

    // const areaCuadrada = ladosCuadrado * ladosCuadrado;
    // console.log ("El área del cuadrado es " + areaCuadrada + "cm2");
    // console.groupEnd ();


// Cuadrado = Funciones

console.group("Cuadrado");

function perimetroCuadrado(lado){
 return lado * 4;
}

function areaCuadrada(lado){
  return lado * lado;
}
console.groupEnd ();

    // //Triángulo = variables
    // console.group("Triándulo");
    // const ladoTriangulo1 = 6;
    // const ladoTriangulo2 = 6;
    // const baseTriangulo = 4;
    // console.log(
    //   "Los lados del triángulo miden: "
    //   + ladoTriangulo1
    //   + "cm, "
    //   + ladoTriangulo2
    //   + "cm, "
    //   + baseTriangulo
    //   + "cm"
    // );

    // const alturaTriangulo = 5.5;
    // console.log(`La altura del triángulo es ${alturaTriangulo} cm`);

    // const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    // console.log ("El perímetro triángulo es " + perimetroTriangulo + "cms");

    // const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    // console.log ("El área triángulo es " + areaTriangulo + "cms2");

    // console.groupEnd();

//Triángulo = funciones
console.group("Triándulo");

function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
  return (base * altura) / 2;
}

console.groupEnd();

    //Circulo = variables
    // console.group("Circulo");

    // const radioCirculo = 4;
    // console.log("El rádio del círculo es: " + radioCirculo + "cm");

    // const diametroCirculo = radioCirculo * 2;
    // console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

    // const PI = Math.PI;
    // console.log("Pi es " + PI);

    // const perimetroCirculo = diametroCirculo * PI;
    // console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

    // const areaCirculo = (radioCirculo ** 2) * PI;
    // console.log("El área del círculo es: " + areaCirculo + "cm2");

    // console.groupEnd();

//Circulo = funciones
console.group("Circulo");

function diametroCirculo(radio){
  return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio){
  return (radio ** 2) * PI;
}

console.groupEnd();

// Funciones cuadrado
function calcPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);

  alert(perimetro + " cms");
}

function calcAreaCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = parseInt(input.value);
  const area = areaCuadrada(value);
  alert(area + " cm2");
}

// Funciones triángulo
function calcPerimetroTriangulo(){
  const input1 = document.getElementById("InputTriangulo1");
  const input2 = document.getElementById("InputTriangulo2");
  const input3 = document.getElementById("InputTriangulo3");
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const value3 = parseInt(input3.value);
  const perimetroTri = perimetroTriangulo(value1, value2, value3);
  alert(perimetroTri + " cms");
}

function calcAreaTriangulo(){
  const input3 = document.getElementById("InputTriangulo3");
  const input4 = document.getElementById("InputTriangulo4");
  const value3 = parseInt(input3.value);
  const value4 = parseInt(input4.value);
  const perimetroTri = areaTriangulo(value3, value4);
  alert(perimetroTri + " cms2");
}

// Funciones Circulo
function calcPerimetroCirculo(){
  const input = document.getElementById("InputCirculo");
  const value = parseInt(input.value);
  const perimetrocir  = perimetroCirculo(value);
  alert(perimetrocir + " cms");
}

function calcAreaCirculo(){
  const input = document.getElementById("InputCirculo");
  const value = parseInt(input.value);
  const areacir = areaCirculo(value);
  alert(areacir + " cms2");
}


function alturaIso(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        const altura = Math.sqrt(lado1**2 - (base/2)**2)
        return altura;
    }
    else{
        alert('No es isósceles')
    }
}

function calcAlturaIso(){
  const input1 = document.getElementById("IsoUno");
  const value1 = parseInt(input1.value);
  const input2 = document.getElementById("IsoDos");
  const value2 = parseInt(input2.value);
  const input3 = document.getElementById("IsoTres");
  const value3 = parseInt(input3.value);

  const altura = alturaIso(value1, value2, value3);
  alert(altura + " cms");
}
