



document.getElementById("display").innerText= "0"; //document es todo el html
    //getElementById es una funcion que se usa para obtener el elemento del html por su id

    //En el html tenemos un display que meustra el valor actual de la calculadora, entonces acá lo iniciamos en 0


 //======================VARIABLES A USAR=======================
    let valor1=0;
    let valor2=0;
    let operacion="";

//======================FUNCIONES A USAR=======================
function calcular(valor1, valor2, operacion){
switch(operacion){
case '+':
return valor1+valor2;
case '-':
return valor1-valor2;
case '*':
return valor1*valor2;
case '/':
if(valor2 === 0){
    return "Error: División por cero";
}
return valor1/valor2;
default:
return "Operacion no valida";
    }
}

function asignarValor(valor){
if(!operacion){ //si opreacion esta vacio
    valor1=valor;
    }else{
    valor2=valor;
    }
    }

//======================BOTONES QUE ME TRAIGO DEL HTML A USAR=======================

//Aca colocamos los querySelector con cada boton
//Me traigo los botones del html a unas variables dentro de mi js para poder usarlos en mi codigo
const btnNum1 = document.querySelector("#num1");
const btnNum2 = document.querySelector("#num2");
const btnNum3 = document.querySelector("#num3");
const btnNum4 = document.querySelector("#num4");
const btnNum5 = document.querySelector("#num5");
const btnNum6 = document.querySelector("#num6");
const btnNum7 = document.querySelector("#num7");
const btnNum8 = document.querySelector("#num8");
const btnNum9 = document.querySelector("#num9");
const btnNum0 = document.querySelector("#num0");
const btnOpRe = document.querySelector("#opRe");
const btnOpM = document.querySelector("#opM");
const btnOpDiv = document.querySelector("#opDiv");
const btnOpSum = document.querySelector("#opSum");
const btnOpIg = document.querySelector("#opIg");



//======================LISTENERS A USAR=======================

/*Acá uso los botones que me traje, a cada uno le asigno un evento (sería click) y hago que se ejecute algo cuando sucede el click
Para que esto pase, alguien tiene que estar mirando todo el tiempo que se haga click en el boton, por eso usamos el addEventListener
un addEventListener es una funcion que se ejecuta cuando sucede un evento, en este caso el click
e es el evento, y se usa para obtener el valor del boton que se hizo click
*/
btnNum1.addEventListener("click", function pressButton1(e){ //no espera parametro
    console.log("Button 1 clicked");
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});


//Ahora esto lo tenemos q hacer con todos los demas botones
btnNum2.addEventListener("click", function pressButton2(e){ //no espera parametro
    console.log("Button 2 clicked");
    asignarValor(Number(e.target.innerText));
        document.getElementById("display").innerText= e.target.innerText;
   // document.getElementById("display").innerText= "2";
    //num2="2";
});

btnNum3.addEventListener("click", function pressButton3(e){ //no espera parametro
    console.log("Button 3 clicked");
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum4.addEventListener("click", function pressButton4(e){ //no espera parametro
    console.log("Button 4 clicked");
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum5.addEventListener("click", function pressButton5(e){ //no espera parametro
    console.log("Button 5 clicked");
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum6.addEventListener("click", function pressButton6(e){ //no espera parametro
    console.log("Button 6 clicked");
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum7.addEventListener("click", function pressButton7(e){ //no espera parametro
    console.log("Button 7 clicked");
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum8.addEventListener("click", function pressButton8(e){ //no espera parametro
    console.log("Button 8 clicked");
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum9.addEventListener("click", function pressButton9(e){ //no espera parametro
    console.log("Button 9 clicked");
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum0.addEventListener("click", function pressButton0(e){ //no espera parametro
    console.log("Button 0 clicked");
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnOpSum.addEventListener("click", function pressButtonSuma() { //no espera parametro
    console.log("Botón SUMA (+) clickeado");
    operacion="+";
});

btnOpRe.addEventListener("click", function pressButtonRe() { //no espera parametro
    console.log("Botón RESTA (-) clickeado");
    operacion="-";
});

btnOpM.addEventListener("click", function pressButtonM() { //no espera parametro
    console.log("Botón MULTIPLICACIÓN (*) clickeado");
    operacion="*";
});

btnOpDiv.addEventListener("click", function pressButtonDiv() { //no espera parametro
    console.log("Botón DIVISIÓN (/) clickeado");
    operacion="/";
});

btnOpIg.addEventListener("click", function pressButtonIgual(){ //no espera parametro
    console.log("Botón IGUAL (=) clickeado");
    console.log("Calculando:", valor1, operacion, valor2);
    //debugger;
    const total = calcular(valor1, valor2, operacion);
    console.log("Resultado:", total);
    document.getElementById("display").innerText= total;
    
    // Resetear valores para la siguiente operación
    valor1 = total; // El resultado se convierte en el nuevo valor1
    valor2 = 0;
    operacion = "";
});
//console.log("Button 1 clicked"); este lo utilizamos para ver si funcionaba el boton
//console.log(btNuml)