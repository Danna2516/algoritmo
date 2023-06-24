function suma() {
    // la variable A captura el 1 valor a lo igual que B y S es el espacio para el resultado//
    let A = 0;
    let B = 0;
    let S = 0;
    let R = 0;
    let M = 0;
    let D = 0;
    //SE LE PIDE AL USUARIO INGRESAR LOS VALORES EN LOS ESPACIOS//
    A=parseInt(prompt("porfavor ingrese el primer valor"));
    B=parseInt(prompt("porfavor ingrese el segundo valor"));
    S= A+B;
    alert("LA SUMA ES: "+S);
}
function opbasicas() {
    A=parseInt(prompt("porfavor ingrese el primer valor"));
    B=parseInt(prompt("porfavor ingrese el segundo valor"));
    R= A-B;
    M =A*B;
    D =A/B;
    alert("LA RESTA ES: "+R);
    alert("LA MULTIPLICACION ES: "+M);
    alert("LA DIVICION ES: " +D)
}
function cuadrado(){
    let N = 0;
    let base= 0;
    N=parseInt(prompt("digite el lado a calcular"));
    base= N*N;
    alert("EL VALOR DE LOS LADOS:" +base);
    }
    function inversion(){
    //un individuo desea invertir su capital en un banco y requiere un sistema que le permita saber //
     //cuanto dinero gana despues de N número de años teniendo encuenta q el banco pago el 1,7 mensual//
    let monto = 0;
    let total = 0;
    let tasa= 1.7 ;
    monto=parseInt(prompt("digite el lado a calcular"));
    total= monto*tasa;
    alert("EL VALOR DEL DINERO INVERTIDO FUE DE :" +total);
    }

    function año(){
    //REALIZAR UN ALGORITMO QUE PERMITA SABER EL AÑO DE NACIMIENTO DE UN INDIVIDUO INGRESANDO SU EDAD Y EL AÑO ACTUAL//
    let edad =0;
    let añoact =0;
    let nacimiento =0;

    edad=parseInt(prompt("Digite su edad"));
    añoact=parseInt(prompt("digite el año actual"));
    nacimiento=edad-añoact;
    alert("USTED NACIO EN EL AÑO: " +nacimiento);
    }

function conversion(){
    //REALIZAR UN ALGORITMO QUE PERMITA SABER EL AÑO DE NACIMIENTO DE UN INDIVIDUO INGRESANDO SU EDAD Y EL AÑO ACTUAL//
        let mts =0;
        let km =1000;
        let pl =39.37;
    
        mts=parseInt(prompt("Digite la unidad de medida"));
        km=mts/km
        pl=mts/pl
        alert("LA CONVERSION DE METROS A KILOMETROS ES DE: " +km);
        alert("LA CONVERSION DE METROS A PULGADAS ES DE: "+pl)
}

function mayor_de_dos() {
    let ME1 = 0;
    let ME2 = 0;
    ME1 = parseInt(prompt("Ingrese el primer numero: "));
    ME2 = parseInt(prompt("Ingrese el segundo numero: "));
    if (ME1 > ME2) {
      alert("El numero mayor es: " + ME1);
    } else {
      alert("El numero mayor es: " + ME2);
    }
  }

  function menor_de_tres() {
    let M1 = 0;
    let M2 = 0;
    let M3 = 0;
    M1 = parseInt(prompt("Ingrese el primer numero: "));
    M2 = parseInt(prompt("Ingrese el segundo numero: "));
    M3 = parseInt(prompt("Ingrese el segundo numero: "));
    if (M1 < M2 && M1 < M3) {
      alert("El numero menor es: " + M1);
    } else if (M2 < M3) {
      alert("El numero menor es: " + M2);
    } else {
      alert("El numero menor es: " + M3);
    }
  }

  function descuento() {
    let PRE = 0;
    let DES = 0;
    let TOT = 0;
    let SUD = 0;
    PRE = parseInt(prompt("Ingrese el valor de la compra: "));
    DES = parseInt(prompt("Ingrese el descuento aplicar: "));
    SUD = (PRE / 100) * DES;
    TOT = PRE - SUD;
    alert(
      "El descuesto que se aplico es del: " +
        DES +
        "%" +
        "El descuento que se desconto es: " +
        SUD
    );
    alert("El total a pagar es: " + TOT);
  }