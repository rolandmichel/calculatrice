function clearScreen(){
    document.getElementById("result").value="";
}

function display(val){
    document.getElementById("result").value+=val;
}

function calculate(){
    c=eval(document.getElementById("result").value);
    document.getElementById("result").value=c;
}
document.addEventListener("keydown", function(event) {
    switch(event.key){
        case "1" :document.getElementById("result").value+=event.key;
        break;
        case "2" :document.getElementById("result").value+=event.key;
        break;
        case "3" :document.getElementById("result").value+=event.key;
        break;
        case "4":document.getElementById("result").value+=event.key;
        break;
        case "5":document.getElementById("result").value+=event.key;
        break;
        case "6":document.getElementById("result").value+=event.key;
        break;
        case "7":document.getElementById("result").value+=event.key;
        break;
        case "8":document.getElementById("result").value+=event.key;
        break;
        case "9":document.getElementById("result").value+=event.key;
        break;
        case "0":document.getElementById("result").value+=event.key;
        break;
        case "+":document.getElementById("result").value+=event.key;
        break;
        case "-":document.getElementById("result").value+=event.key;
        break;
        case "*":document.getElementById("result").value+=event.key;
        break;
        case "/":document.getElementById("result").value+=event.key;
        break;
        case "Enter":calculate(); // le nom de votre fonction pour calculer
        break;
        case "Backspace":clearScreen()//le nom de votre function pour clear
        break;
    }
  })

  
