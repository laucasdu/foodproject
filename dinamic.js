
let variableNumero = 1;
 
   
    function sumar() {
    variableNumero++
    document.getElementById("number1").innerHTML = `${variableNumero}`;
    multiplicar()
   
    }
    
    function restar() {
        if (variableNumero <= 0){
            variableNumero = 0
        } else {
            variableNumero--
            document.getElementById("number1").innerHTML = `${variableNumero}`;
        }
        
        multiplicar()
    }

let variableNumero2=1;
    function sumar2() {
    variableNumero2++
    document.getElementById("number2").innerHTML = `${variableNumero2}`;
    multiplicar()
    }
    function restar2() {
        if (variableNumero2 <= 0){
            variableNumero2 = 0
        } else {
            variableNumero2--
            document.getElementById("number2").innerHTML = `${variableNumero2}`;
        }
        multiplicar()
    }
let variableNumero3=1;
    function sumar3() {
    variableNumero3++
    document.getElementById("number3").innerHTML = `${variableNumero3}`;
    multiplicar()
    }
    function restar3() {
        if (variableNumero3 <= 0){
            variableNumero3 = 0
        } else {
            variableNumero3--
            document.getElementById("number3").innerHTML = `${variableNumero3}`;
        }
        multiplicar()
    }


let variableNumero4=1;
    function sumar4() {
    variableNumero4++
    document.getElementById("number4").innerHTML = `${variableNumero4}`;
    multiplicar()
    }
    function restar4() {
        if (variableNumero4 <= 0){
            variableNumero4 = 0
        } else {
            variableNumero4--
            document.getElementById("number4").innerHTML = `${variableNumero4}`;
        }
        multiplicar()
    }

    
function multiplicar(){
    let e = document.querySelector("#california").innerHTML;
    let f = document.querySelector("#greek").innerHTML;
    let g = document.querySelector("#sicilian").innerHTML;
    let h = document.querySelector("#louis").innerHTML;
    let i = document.getElementById("tax").innerHTML;
    let j = document.getElementById("delivery").innerHTML;


    let total = (variableNumero*parseFloat(e))+(variableNumero2*parseFloat(f))+(variableNumero3*parseFloat(g))+(variableNumero4*parseFloat(h))
    document.getElementById("totalprice").innerHTML = total
    let totaltotal = total + parseFloat(i) + parseFloat (j)
    document.getElementById("totaltotalprice").innerHTML = totaltotal



}


    

  


    







   



