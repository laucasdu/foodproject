
//PART PÀGINA CARRITO

let variableNumero = 1;
 
    function sumardiv1() {
    variableNumero++
    document.getElementById("number1").innerHTML = `${variableNumero}`;
    multiplicar()
   
    }
    
    function restardiv1() {
        if (variableNumero <= 0){
            variableNumero = 0
        } else {
            variableNumero--
            document.getElementById("number1").innerHTML = `${variableNumero}`;
        }
        
        multiplicar()
    }

let variableNumero2=1;
    function sumardiv2() {
    variableNumero2++
    document.getElementById("number2").innerHTML = `${variableNumero2}`;
    multiplicar()
    }
    function restardiv2() {
        if (variableNumero2 <= 0){
            variableNumero2 = 0
        } else {
            variableNumero2--
            document.getElementById("number2").innerHTML = `${variableNumero2}`;
        }
        multiplicar()
    }
let variableNumero3=1;
    function sumardiv3() {
    variableNumero3++
    document.getElementById("number3").innerHTML = `${variableNumero3}`;
    multiplicar()
    }
    function restardiv3() {
        if (variableNumero3 <= 0){
            variableNumero3 = 0
        } else {
            variableNumero3--
            document.getElementById("number3").innerHTML = `${variableNumero3}`;
        }
        multiplicar()
    }


let variableNumero4=1;
    function sumardiv4() {
    variableNumero4++
    document.getElementById("number4").innerHTML = `${variableNumero4}`;
    multiplicar()
    }
    function restardiv4() {
        if (variableNumero4 <= 0){
            variableNumero4 = 0
        } else {
            variableNumero4--
            document.getElementById("number4").innerHTML = `${variableNumero4}`;
        }
        multiplicar()
    }

    
function multiplicar(){
    let preuCalifornia = document.querySelector("#california").innerHTML;
    let preuGreek = document.querySelector("#greek").innerHTML;
    let preuSicilian = document.querySelector("#sicilian").innerHTML;
    let preuLouis = document.querySelector("#louis").innerHTML;
    let tax = document.getElementById("tax").innerHTML;
    let delivery = document.getElementById("delivery").innerHTML;

    
    let total = (variableNumero*parseFloat(preuCalifornia))+(variableNumero2*parseFloat(preuGreek))+(variableNumero3*parseFloat(preuSicilian))+(variableNumero4*parseFloat(preuLouis))
    document.getElementById("totalprice").innerHTML = total.toFixed(2)
    let totaltotal = total + parseFloat(tax) + parseFloat (delivery)
    document.getElementById("totaltotalprice").innerHTML = totaltotal.toFixed(2)
}


//PART PÀGINA PRINCIPAL (AFEGIR A CARRITO)    

let numcart = 0
function sumarCarrito(){
    numcart++
    document.getElementById("cartnum").innerHTML = `${numcart}`;
    verDivCarrito ()
}


function ocultarDivCarrito (){
    document.getElementById("cartnum").style.display = 'none'
    }
    
function verDivCarrito (){
    document.getElementById("cartnum").style.display = '';
    }    
    

function hideButtonAdd1 (){
    document.getElementById("addpizza1").style.display = 'none'
    }
function hideButtonAdd2 (){
    document.getElementById("addpizza2").style.display = 'none'
    }
function hideButtonAdd3 (){
    document.getElementById("addpizza3").style.display = 'none'
    }
function hideButtonAdd4 (){
    document.getElementById("addpizza4").style.display = 'none'
    }

function oops (){
    alert("OOooOooops, no hem acabat el treball, no podeu comprar pizzes amb nosaltres.")
}

function clearAll(){
    variableNumero = 0
    variableNumero2 = 0
    variableNumero3 = 0
    variableNumero4 = 0
    document.getElementById("number1").innerHTML = `${variableNumero}`;
    document.getElementById("number2").innerHTML = `${variableNumero2}`;
    document.getElementById("number3").innerHTML = `${variableNumero3}`;
    document.getElementById("number4").innerHTML = `${variableNumero4}`;
    multiplicar();
}
    /////////////////////////////////////////////////TODOLIST (PIZZES)////////////////////////////////////////////////////////////////////////

    //INTENTAR APLICAR TO DO LIST A LA APP
    /*let ListOfPizzas = [
        {
            id:1,
            task: "California Pizza",
        },
        {
            id:2,
            task:"Greek Pizza",
        },
        {
            id:3,
            task:"Sicilian Pizza",
        },
        {
            id:4,
            task: "Louis Pizza"
        }]

        function render() {
            let html = `<input id=inputId type=text> <button id="addBut" onclick="addToDo()"> Add To Do </button>`;
          
            for (const pizza of ListOfPizzas) {
              html += ` <div class=toDo> <li class="liClass"> ${pizza.task}</li>
              <div class=butContainer><button id="deleteBut"onclick="removeToDo(${pizza.id})" >Delete</button></div> </div>`;
            }
              let DOMList = document.getElementById("carrito");
              DOMList.innerHTML = html;
          }
          
          //MAIN
          render();*/
          












  


    







   



